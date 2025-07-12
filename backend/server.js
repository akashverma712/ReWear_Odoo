// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import requestRoutes from './routes/requestRoutes.js'; // ✅ Request notification routes

dotenv.config();
connectDB();

const app = express();

// ✅ ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🌐 Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🖼️ Static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🛣️ API Routes
app.use('/api/auth', authRoutes);          // 🔐 Auth (Login/Register)
app.use('/api/items', itemRoutes);         // 🎽 Item donation routes
app.use('/api/requests', requestRoutes);   // 📬 Requests / Notifications

// 🔄 Default root route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// 🚀 Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
