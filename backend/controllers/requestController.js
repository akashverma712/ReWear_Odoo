import Request from '../models/Request.js';

export const createRequest = async (req, res) => {
  try {
    const { itemId, requesterId, ownerId } = req.body;

    console.log('📥 Incoming Request:');
    console.log('🧺 itemId:', itemId);
    console.log('🙋 requesterId:', requesterId);
    console.log('🎯 ownerId:', ownerId);

    if (!itemId || !requesterId || !ownerId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newRequest = new Request({
      item: itemId,
      requester: requesterId,
      owner: ownerId,
    });

    await newRequest.save();
    console.log('✅ Request saved successfully');
    res.status(201).json({ message: 'Request created successfully', request: newRequest });
  } catch (err) {
    console.error('❌ Error creating request:', err.message);
    res.status(500).json({ message: 'Request creation failed', error: err.message });
  }
};

export const getNotificationsForUser = async (req, res) => {
  try {
    const ownerId = req.params.userId; // ✅ Make sure frontend sends `userId` in URL

    console.log('🔔 Fetching notifications for ownerId:', ownerId);

    const notifications = await Request.find({ owner: ownerId })
      .populate('requester', 'name email profileImage')
      .populate('item');

    console.log(`📦 Found ${notifications.length} notifications`);
    res.status(200).json(notifications);
  } catch (err) {
    console.error('❌ Error fetching notifications:', err.message);
    res.status(500).json({ message: 'Failed to fetch notifications', error: err.message });
  }
};
