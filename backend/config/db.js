const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

// MongoDB Connection URI from environment variables
const uri = process.env.MONGO_URI;

// Create a MongoClient with Stable API options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Database and Collection Names
const dbName = process.env.DB_NAME || "myDatabase";
const collectionName = process.env.COLLECTION_NAME || "myCollection";

// MongoDB connection function
async function connectToDatabase() {
  try {
    if (!uri) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables"
      );
    }

    await client.connect();
    console.log("Connected to MongoDB successfully!");

    const db = client.db(dbName);
    return db.collection(collectionName);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
}

// Export client and connection function for flexibility
module.exports = { connectToDatabase, client };
