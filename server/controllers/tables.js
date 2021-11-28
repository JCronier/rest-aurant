import mongoose from 'mongoose';
import Table from "../models/table.js";

export const getTables = async (req, res) => {
  try {
    const tables = await Table.find();

    res.status(200).json(tables);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTable = async (req, res) => {
  const { id, qrCodeUrl } = req.body;

  const newTable = new Table({ id, qr_code: "https:" + qrCodeUrl });

  try {
    await newTable.save();

    res.status(201).json(newTable);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTable = async (req, res) => {
  const { id } = req.params;
  const { _id, qr_code, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No table with id: ${_id}`);

  const tableWithUpdatedStatus = { _id, id: Number(id), qr_code, status };

  await Table.findOneAndUpdate({ id }, tableWithUpdatedStatus, { new: true });

  res.json(tableWithUpdatedStatus);
};