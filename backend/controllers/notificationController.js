// controllers/notificationController.js
import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  try {
    const { senderId, receiverId, itemId } = req.body;

    const notification = new Notification({
      sender: senderId,
      receiver: receiverId,
      item: itemId,
    });

    await notification.save();

    res.status(201).json({ message: 'Notification sent', notification });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create notification', error: err.message });
  }
};

export const getNotificationsForUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const notifications = await Notification.find({ receiver: userId })
      .populate('sender', 'name email')
      .populate('item');

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch notifications', error: err.message });
  }
};
