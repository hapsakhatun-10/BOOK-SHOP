import { MongoClient } from "mongodb";

let client;
let db;

export function getDB() {
    if (!client) {
        client = new MongoClient(process.env.MONGODB_URL);
    }
    if (!db) {
        db = client.db("bookshop");
    }
    return db;
}