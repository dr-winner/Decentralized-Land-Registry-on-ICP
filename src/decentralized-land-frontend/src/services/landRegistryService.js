import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../declarations/decentralized_land_registry";

// Initialize the HttpAgent and Actor
const agent = new HttpAgent({host: "https://localhost:8000"});
const landRegistry = Actor.createActor(idlFactory, { agent, canisterId });

// Export functions for interacting with the canister
export const registerLand = async (owner, details) => {
    return await landRegistry.registerLand(owner, details);
};

export const fetchRegisteredLands = async () => {
    return await landRegistry.getLands();
};
