const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../config/db");

// Create a new item
const createItem = async (req, res) => {
  const newItem = req.body;
  try {
    const collection = await connectToDatabase();
    const result = await collection.insertOne(newItem);
    res.status(201).json({
      message: "Item added successfully",
      itemId: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all items
const getItems = async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const items = await collection.find().toArray();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an item by ID
const updateItem = async (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  try {
    const collection = await connectToDatabase();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedItem }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await connectToDatabase();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createItem, getItems, updateItem, deleteItem };
