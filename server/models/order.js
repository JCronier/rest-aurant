import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  id: Number,
  table: {
    type: Number,
    field: "id",
    ref: "Table"
  },
  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
  isPaid: {
    type: Boolean,
    default: false
  },
  isOrdered: {
    type: Boolean,
    default: false
  },
  options: {type: mongoose.Schema.Types.Mixed, default: {}},
}, { minimize: false });

const Order = mongoose.model('Order', orderSchema);

export default Order;

// options: {
//   type: [{
//     item_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
//     options: [String]
//   }]
// }

// options: [{type: mongoose.Schema.Types.ObjectId, ref: 'Option'}]

// const options = new mongoose.Schema({
//   item: {type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
//   options: [String]
// });

// options: {}

// 1001.2317 = ['no pickles', 'mild']

//options: {}