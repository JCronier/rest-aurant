import { Mongoose } from 'mongoose';
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
  const item = req.body;

  const newItem = new Item(item);

  try {
    await newItem.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  const { id: _id } = req.params;
  const item = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No item with that id');
  }

  const updatedItem = await Item.findByIdAndUpdate(_id, { ...item, _id }, { new: true });

  res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
  const { id: _id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No item with that id');
  }

  await Item.findByIdAndRemove(_id);

  res.json({ message: 'Item deleted successfully' });
};