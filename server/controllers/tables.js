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

export const updateTableStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  // if (!Mongoose.Types.ObjectId.isValid(_id)) {
  //   return res.status(404).send('No table with that id');
  // }

  try {
    await Table.findOneAndUpdate({id}, {status});
    res.status(204).send("Updated successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteTable = async (req, res) => {
  const { id } = req.params;

  // if (!Mongoose.Types.ObjectId.isValid(_id)) {
  //   return res.status(404).send('No table with that id');
  // }

  await Table.findByIdAndRemove(id);

  res.json({ message: 'Table deleted successfully' });
};