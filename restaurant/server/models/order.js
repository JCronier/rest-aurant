import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  id: Number,
  table: {
    type: Number,
    field: 'id',
    ref: 'Table'
  },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  isPaid: {
    type: Boolean,
    default: false
  },
  options: [Object]
}, { minimize: false });

const Order = mongoose.model('Order', orderSchema);

export default Order;