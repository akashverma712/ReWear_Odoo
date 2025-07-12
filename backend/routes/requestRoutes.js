import express from 'express';
import { createRequest, getNotificationsForUser } from '../controllers/requestController.js';

const router = express.Router();

// ✅ Routes
router.post('/', createRequest);         // POST: send request
router.get('/:userId', getNotificationsForUser);  // GET: get all notifications for that user

export default router;
