import mongoose from 'mongoose';
import Item from '../models/item.js';

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const { name, price, description, category, options, tags, image_url } = req.body;

  const newItem = new Item({ name, price, description, category, options, tags, image_url });

  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id: _id } = req.params;
  const { name, price, description, category, options, tags, image_url } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No item with id: ${_id}`);

  const updatedItem = { _id, name, price, description, category, options, tags, image_url };

  await Item.findByIdAndUpdate(_id, updatedItem, { new: true });

  res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No item with id: ${_id}`);

  await Item.findByIdAndRemove(_id);

  res.json({ message: 'Item deleted successfully' });
};