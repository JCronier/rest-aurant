import mongoose from 'mongoose';

const tableSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  qr_code: String,
  status: {
    type: String,
    enum: ["VACANT", "OCCUPIED", "PAID"],
    default: "VACANT"
  }
}, { minimize: false });

const Table = mongoose.model('Table', tableSchema);

export default Table;