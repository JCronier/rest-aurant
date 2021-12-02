import Receipt from "../models/receipt.js"

export const getReceipts = async (req, res) => {
  try {
    const receipts = await Receipt.find();

    res.status(200).json(receipts);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createReceipt = async (req, res) => {
  const {amount_paid, table, items, options, confirmation_code, order_id} = req.body;

  const newReceipt = new Receipt({amount_paid, table, items, options, confirmation_code, order_id})

  try {
    await newReceipt.save();

    res.status(201).json(newReceipt);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
};