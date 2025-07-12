// components/ManageListings.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const initialListings = [
	{
		id: 'LIST001',
		title: 'Oversized Hoodie',
		seller: 'Anaya Kapoor',
		category: 'Winterwear',
		price: 30,
		image: 'https://source.unsplash.com/400x400/?hoodie',
	},
	{
		id: 'LIST002',
		title: 'Denim Jeans',
		seller: 'Rohan Mehta',
		category: 'Casual',
		price: 20,
		image: 'https://source.unsplash.com/400x400/?jeans',
	},
	{
		id: 'LIST003',
		title: 'Kurti Set',
		seller: 'Zara Khan',
		category: 'Ethnic',
		price: 25,
		image: 'https://source.unsplash.com/400x400/?kurti',
	},
];

export default function ManageListings() {
	const [listings, setListings] = useState(initialListings);

	const handleAction = (action, listingId, title) => {
		if (action === 'Delete') {
			setListings((prev) => prev.filter((item) => item.id !== listingId));
			toast.error(`Deleted: ${title}`);
		} else {
			toast.success(`Approved: ${title}`);
			setListings((prev) => prev.filter((item) => item.id !== listingId));
		}
	};

	return (
		<motion.div
			className="space-y-6"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: 'spring', stiffness: 70 }}>
			<AnimatePresence>
				{listings.map((listing) => (
					<motion.div
						key={listing.id}
						className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-md"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}>
						{/* Image */}
						<img
							src={listing.image}
							alt={listing.title}
							className="w-20 h-20 rounded-lg object-cover border"
						/>

						{/* Details */}
						<div className="flex-1">
							<h3 className="text-lg font-semibold">{listing.title}</h3>
							<p className="text-sm text-gray-400">
								Seller: <strong>{listing.seller}</strong> | Category: <strong>{listing.category}</strong>
							</p>
						</div>

						{/* Actions */}
						<div className="flex gap-2">
							<button
								onClick={() => handleAction('Approve', listing.id, listing.title)}
								className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded-md text-sm font-medium transition">
								Approve
							</button>
							<button
								onClick={() => handleAction('Delete', listing.id, listing.title)}
								className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-md text-sm font-medium transition">
								Delete
							</button>
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	);
}
