// controllers/itemController.js
import Item from '../models/Item.js';

// ✅ Add Item Controller
export const addItem = async (req, res) => {
  try {
    console.log('📦 req.body:', req.body);
    console.log('🖼️ req.file:', req.file);

    const { category, type, size, condition, tags, contact, uploader } = req.body;

    if (!req.file || !req.file.filename) {
      return res.status(400).json({ message: 'Image upload failed or missing!' });
    }

    const image = req.file.filename;

    const newItem = new Item({
      category,
      type,
      size,
      condition,
      tags,
      contact,
      image,
      uploader,
    });

    await newItem.save();

    res.status(201).json({ message: 'Item uploaded', item: newItem });
  } catch (err) {
    console.error('❌ Upload Error:', err.message);
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

// ✅ Get All Items Controller
export const getItems = async (req, res) => {
  try {
    const items = await Item.find()
      .populate('uploader', 'name email profileImage')
      .sort({ createdAt: -1 });

    res.status(200).json(items);
  } catch (err) {
    console.error('❌ Fetch Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch items', error: err.message });
  }
};
