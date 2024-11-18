import Principal "mo:base/Principal";
import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Result "mo:base/Result";
import Iter "mo:base/Iter";
import System "mo:base/Iter";

// LandRegistry Actor
actor LandRegistry {

    // System functions placed at the top level of the actor
    system func preupgrade() {
        landRecordsEntries := Iter.toArray(landRecords.entries());
    };

    system func postupgrade() {
        landRecords := HashMap.fromIter<Nat, LandRecord>(
            Iter.fromArray(landRecordsEntries),
            1,
            Nat.equal,
            customHash // Using customHash
        );
        landRecordsEntries := [];
    };
    // Type definitions
    type LandRecord = {
        id: Nat;
        owner: Principal;
        location: Text;
        area: Nat;  // in square meters
        price: Nat; // in tokens
        registrationDate: Time.Time;
        isForSale: Bool;
    };

    // Stable variables
    private stable var nextLandId: Nat = 0;
    private stable var landRecordsEntries: [(Nat, LandRecord)] = [];

    // Non-stable variables
    private var landRecords = HashMap.HashMap<Nat, LandRecord>(1, Nat.equal, customHash); // Using customHash

    // Custom hash function for large Nat values
    func customHash(n: Nat): Nat {
        return n % 1_000_000_007; // A large prime number as a simple hash function
    }



    // Register a new land
    public shared(msg) func registerLand(location: Text, area: Nat, price: Nat) : async Nat {
        let owner = msg.caller;
        let landRecord: LandRecord = {
            id = nextLandId;
            owner = owner;
            location = location;
            area = area;
            price = price;
            registrationDate = Time.now();
            isForSale = false;
        };

        landRecords.put(nextLandId, landRecord);
        nextLandId += 1;
        return nextLandId - 1;
    };

    // Get land details by ID
    public query func getLandDetails(landId: Nat) : async ?LandRecord {
        landRecords.get(landId)
    };

    // List land for sale
    public shared(msg) func listLandForSale(landId: Nat) : async Result.Result<(), Text> {
        switch (landRecords.get(landId)) {
            case (null) {
                #err("Land ID does not exist")
            };
            case (?record) {
                if (record.owner != msg.caller) {
                    return #err("Only the owner can list the land for sale");
                };
                
                let updatedRecord = {
                    id = record.id;
                    owner = record.owner;
                    location = record.location;
                    area = record.area;
                    price = record.price;
                    registrationDate = record.registrationDate;
                    isForSale = true;
                };
                landRecords.put(landId, updatedRecord);
                #ok()
            };
        }
    };

    // Transfer land ownership
    public shared(msg) func transferLand(landId: Nat, newOwner: Principal) : async Result.Result<(), Text> {
        switch (landRecords.get(landId)) {
            case (null) {
                #err("Land ID does not exist")
            };
            case (?record) {
                if (record.owner != msg.caller) {
                    return #err("Only the owner can transfer the land");
                };
                
                let updatedRecord = {
                    id = record.id;
                    owner = newOwner;
                    location = record.location;
                    area = record.area;
                    price = record.price;
                    registrationDate = record.registrationDate;
                    isForSale = false;
                };
                landRecords.put(landId, updatedRecord);
                #ok()
            };
        }
    };

    // Get all lands owned by a principal
    public query func getLandsByOwner(owner: Principal) : async [LandRecord] {
        var ownerLands: [LandRecord] = [];
        for ((id, record) in landRecords.entries()) {
            if (record.owner == owner) {
                ownerLands := Array.append(ownerLands, [record]);
            };
        };
        ownerLands
    };

    // Update land price
    public shared(msg) func updateLandPrice(landId: Nat, newPrice: Nat) : async Result.Result<(), Text> {
        switch (landRecords.get(landId)) {
            case (null) {
                #err("Land ID does not exist")
            };
            case (?record) {
                if (record.owner != msg.caller) {
                    return #err("Only the owner can update the price");
                };
                
                let updatedRecord = {
                    id = record.id;
                    owner = record.owner;
                    location = record.location;
                    area = record.area;
                    price = newPrice;
                    registrationDate = record.registrationDate;
                    isForSale = record.isForSale;
                };
                landRecords.put(landId, updatedRecord);
                #ok()
            };
        }
    };

    // Get all lands that are for sale
    public query func getLandsForSale() : async [LandRecord] {
        var landsForSale: [LandRecord] = [];
        for ((id, record) in landRecords.entries()) {
            if (record.isForSale) {
                landsForSale := Array.append(landsForSale, [record]);
            };
        };
        landsForSale
    };
};
