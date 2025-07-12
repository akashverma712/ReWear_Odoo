// components/ManageOrders.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';

const initialOrders = [
	{
		id: 'ORD123',
		user: 'Anaya Kapoor',
		item: 'T-shirt',
		price: 40,
		status: 'Pending',
	},
	{
		id: 'ORD124',
		user: 'Rohan Mehta',
		item: 'T-shirt',
		price: 25,
		status: 'Pending',
	},
	{
		id: 'ORD125',
		user: 'T-shirt',
		item: 'Summer Dress',
		price: 30,
		status: 'Pending',
	},
	{
		id: 'ORD126',
		user: 'Jeans',
		item: 'Summer Dress',
		price: 30,
		status: 'Pending',
	},
];

export default function ManageOrders() {
	const [orderList, setOrderList] = useState(initialOrders);

	const handleOrderAction = (action, orderId) => {
		if (action === 'Cancel') {
			setOrderList((prev) => prev.filter((order) => order.id !== orderId));
			toast.error(`Order ${orderId} canceled`);
		} else {
			setOrderList((prev) => prev.map((order) => (order.id === orderId ? { ...order, status: 'Shipped' } : order)));
			toast.success(`Order ${orderId} marked as shipped`);
		}
	};

	return (
		<motion.div
			className="space-y-6"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', stiffness: 70 }}>
			<AnimatePresence>
				{orderList.map((order) => (
					<motion.div
						key={order.id}
						className="flex items-center justify-between p-4 bg-gray-800 rounded-xl shadow-md"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}>
						{/* Order Details */}
						<div className="flex-1">
							<h3 className="text-lg font-semibold">{order.item}</h3>
							<p className="text-sm text-gray-400">
								Order ID: {order.id} 
							</p>
							<p className="text-sm mt-1">
								Status: <span className={`font-semibold ${order.status === 'Shipped' ? 'text-green-400' : 'text-yellow-400'}`}>{order.status}</span>
							</p>
						</div>

						{/* Actions */}
						<div className="flex gap-2 ml-6">
							{order.status !== 'Shipped' && (
								<button
									onClick={() => handleOrderAction('Ship', order.id)}
									className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded-md text-sm font-medium transition">
									Ship
								</button>
							)}
							<button
								onClick={() => handleOrderAction('Cancel', order.id)}
								className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-md text-sm font-medium transition">
								Cancel
							</button>
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	);
}
