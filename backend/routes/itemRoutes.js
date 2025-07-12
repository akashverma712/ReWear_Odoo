import express from 'express';
import multer from 'multer';
import path from 'path';
import { addItem, getItems } from '../controllers/itemController.js'; // ✅ getItems imported

const router = express.Router();

// 📦 Storage config for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder to save uploads
  },
  filename: (req, file, cb) => {
    // create unique file name with timestamp and extension
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  }
});

const upload = multer({ storage });

// ✅ Route: POST /api/items (add item)
router.post('/', upload.single('image'), addItem);

// ✅ Route: GET /api/items (fetch all items)
router.get('/', getItems); // 🔥 This was missing!

export default router;
