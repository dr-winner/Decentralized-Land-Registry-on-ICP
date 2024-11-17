import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

// Define the data model for a land record
type LandRecord = {
    id: Nat;
    owner: Principal;
    location: Text;
    size: Nat; // in square meters
    value: Nat; // in currency units
    history: [Text]; // transaction history
};

// Define the main actor for the land registry
actor LandRegistry {
    // Use a HashMap to store land records
    private var records = HashMap<Nat, LandRecord>();

    // Method to register land
    public func registerLand(id: Nat, location: Text, size: Nat, value: Nat): async Text {
        // Check if the land ID already exists
        if (records.contains(id)) {
            return "Land ID already exists.";
        };

        let newRecord: LandRecord = {
            id = id;
            owner = msg.caller; // Assign the caller as the owner
            location = location;
            size = size;
            value = value;
            history = ["Registered by " # Principal.toText(msg.caller)];
        };

        records.put(id, newRecord);
        return "Land registered successfully.";
    };

    // Method to transfer ownership of land
    public func transferOwnership(id: Nat, newOwner: Principal): async Text {
        switch (records.get(id)) {
            case (null) { return "Land ID not found."; };
            case (some(record)) {
                // Check if the caller is the current owner
                if (record.owner != msg.caller) {
                    return "You are not the owner.";
                };

                // Update the record with the new owner
                let updatedRecord = {
                    id = record.id;
                    owner = newOwner;
                    location = record.location;
                    size = record.size;
                    value = record.value;
                    history = record.history # ["Transferred to " # Principal.toText(newOwner)];
                };

                records.put(id, updatedRecord);
                return "Ownership transferred successfully.";
            };
        }
    }

    // Method to retrieve a land record by ID
    public query func getLandRecord(id: Nat): async ?LandRecord {
        return records.get(id);
    }

    // Method to get the history of a land record
    public query func getLandHistory(id: Nat): async ?[Text] {
        switch (records.get(id)) {
            case (null) { return null; }; // Land ID not found
            case (some(record)) { return record.history; }; // Return the history
        }
    }
};
