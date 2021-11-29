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
  const order = req.body;

  const newOrder = new Order(order);

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

  await Order.updateOne({ id: id }, { '$push': { items: items } });
  await Order.updateOne({ id: id }, { '$set': updatedOrder });

  res.status(202).json();
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { isPaid } = req.body

  try {
    await Order.findOneAndUpdate({id}, {isPaid});
    res.status(204).send("Updated succesfully")
  }  catch (error) {
    res.status(409).json({ message: error.message })
  }
}