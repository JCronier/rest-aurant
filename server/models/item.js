import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: {
    type: String,
    enum: ['Food', 'Drink', 'Dessert'],
  },
  options: [String],
  tags: [String]
});

const Item = mongoose.model('Item', itemSchema);

export default Item;