import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ManageOrders from './ManageOrders';
import ManageListings from './ManageListings';

const initialUsers = [
	{
		id: 1,
		name: 'Anaya Kapoor',
		email: 'anaya@example.com',
		avatar: 'https://i.pravatar.cc/150?img=1',
		actions: ['Approve', 'Remove'],
		isApproved: false,
	},
	{
		id: 2,
		name: 'Rohan Mehta',
		email: 'rohan@example.com',
		avatar: 'https://i.pravatar.cc/150?img=2',
		actions: ['Approve', 'Remove'],
		isApproved: false,
	},
	{
		id: 3,
		name: 'Zara Khan',
		email: 'zara@example.com',
		avatar: 'https://i.pravatar.cc/150?img=3',
		actions: ['Approve', 'Remove'],
		isApproved: false,
	},
];

export default function AdminPanel() {
	const [activeTab, setActiveTab] = useState('Manage Users');
	const [userList, setUserList] = useState(initialUsers);

	const handleAction = (action, userId, userName) => {
		if (action === 'Remove') {
			toast.error(`Removed ${userName}`);
			setUserList((prev) => prev.filter((u) => u.id !== userId));
		} else if (action === 'Approve') {
			toast.success(`${userName} approved`);
			setUserList((prev) => prev.map((u) => (u.id === userId ? { ...u, isApproved: true } : u)));
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white p-6">
			<h1 className="text-3xl font-bold mb-6 text-center">🛠️ Admin Panel</h1>

			{/* Tabs */}
			<div className="flex justify-center gap-4 mb-8">
				{['Manage Users', 'Manage Orders', 'Manage Listings'].map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 py-2 rounded-full transition-all duration-300 ${activeTab === tab ? 'bg-white text-black font-semibold' : 'bg-gray-700 hover:bg-gray-600'}`}>
						{tab}
					</button>
				))}
			</div>

			{/* Manage Users */}
			{activeTab === 'Manage Users' && (
				<motion.div
					className="space-y-6"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', stiffness: 70 }}>
					<AnimatePresence>
						{userList.map((user) => (
							<motion.div
								key={user.id}
								className={`flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300 ${user.isApproved ? 'bg-green-700' : 'bg-gray-800'}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{
									opacity: 0,
									scale: 0.95,
									transition: { duration: 0.3 },
								}}>
								<img
									src={user.avatar}
									alt={user.name}
									className="w-16 h-16 rounded-full border-2 border-white object-cover"
								/>

								<div className="flex-1 mx-6">
									<h2 className="text-lg font-semibold">{user.name}</h2>
									<p className="text-sm text-gray-300">{user.email}</p>
								</div>

								<div className="flex gap-2">
									{user.actions.map((action, index) => (
										<button
											key={index}
											onClick={() => handleAction(action, user.id, user.name)}
											className={`px-3 py-1 rounded-md text-sm font-medium transition ${action === 'Approve' ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'}`}
											disabled={action === 'Approve' && user.isApproved}>
											{user.isApproved && action === 'Approve' ? 'Approved' : action}
										</button>
									))}
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			)}

			{/* Manage Orders */}
			{activeTab === 'Manage Orders' && <ManageOrders />}

			{/* Manage Listings */}
			{activeTab === 'Manage Listings' && <ManageListings />}
		</div>
	);
}
