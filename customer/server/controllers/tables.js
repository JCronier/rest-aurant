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
  const { id } = req.body;
  const qrCode = "Hello, i am a qr code";

  const newTable = new Table({ id, qr_code: qrCode })

  try {
    await newTable.save();

    res.status(201).json(newTable);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
