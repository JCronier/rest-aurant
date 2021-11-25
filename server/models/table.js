import mongoose from 'mongoose';

const tableSchema = mongoose.Schema({
  id: Number,
  qr_code: String,
  status: {
    type: String,
    default: "VACANT"
  }
}, { minimize: false });

const Table = mongoose.model('Table', tableSchema);

export default Table;