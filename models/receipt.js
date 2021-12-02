import mongoose from 'mongoose';

const receiptSchema = mongoose.Schema({
  id: Number,
  amount_paid: Number,
  table: {
    type: Number,
    field: "id",
    ref: "Table"
  },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  options: [Object],
  confirmation_code: String,
  order_id: {
    type: Number, 
    field: "id",
    ref: 'Order'},
  date_created: { type: Date, default: Date.now }
}, { minimize: false });

const Receipt = mongoose.model('Receipt', receiptSchema);

export default Receipt;