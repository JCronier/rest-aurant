import mongoose from 'mongoose';
import Table from '../models/table.js';

export const getTables = async (req, res) => {
  try {
    const tables = await Table.find();

    res.status(200).json(tables);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTable = async (req, res) => {
  const table = req.body;

  const newTable = new Table(table);

  try {
    await newTable.save();

    res.status(201).json(newTable);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTable = async (req, res) => {
  const { id: _id } = req.params;
  const table = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No table with that id');
  }

  const updatedTable = await Table.findByIdAndUpdate(_id, { ...table, _id }, { new: true });

  res.json(updatedTable);
};

export const deleteTable = async (req, res) => {
  const { id: _id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No table with that id');
  }

  await TAble.findByIdAndRemove(_id);

  res.json({ message: 'Table deleted successfully' });
};