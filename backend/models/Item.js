// models/Item.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: String,
  contact: String,
  image: String, // image filename
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Item', itemSchema);
