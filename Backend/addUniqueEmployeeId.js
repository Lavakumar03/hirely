const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI; // Ensure this is set correctly
const dbName = "test"; // Replace with your database name

(async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("job");

    // Fetch all documents in the collection
    const jobs = await collection.find().toArray();

    // Iterate and update each document with a unique 5-digit employeeId
    for (const job of jobs) {
      const uniqueEmployeeId = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit integer
      await collection.updateOne(
        { _id: job._id }, // Match the document by its unique `_id`
        { $set: { employeeId: uniqueEmployeeId } } // Add the `employeeId` field
      );
    }

    console.log("Successfully added unique 5-digit employeeId to all documents.");
  } catch (error) {
    console.error("Error updating documents:", error);
  } finally {
    await client.close();
  }
})();
