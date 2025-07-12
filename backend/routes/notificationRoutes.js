// routes/notificationRoutes.js
import express from 'express';
import { createNotification, getNotificationsForUser } from '../controllers/notificationController.js';

const router = express.Router();

// POST: Request an item (create notification)
router.post('/', createNotification);

// GET: All notifications for a user
router.get('/:userId', getNotificationsForUser);

export default router;
