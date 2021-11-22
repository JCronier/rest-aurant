import Order from "../models/order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  const id = Math.floor((Math.random() * 100) + 1);
  const { table } = req.body;

  const optionsObj = {}

  const newOrder = new Order({ id, table });

  try {
      await newOrder.save();

      res.status(201).json(newOrder);
  } catch (error) {
      res.status(409).json({ message: error.message });
  };
};

export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { items, isPaid, isOrdered, options } = req.body;

  const updatedOrder = { isPaid, isOrdered, options }

  await Order.updateOne({ id:id }, {'$push': {items: items}});
  await Order.updateOne({ id:id }, {'$set': updatedOrder});

  res.status(202).json();
};