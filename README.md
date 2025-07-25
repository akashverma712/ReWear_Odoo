
> *ReWear* is a web-based platform that empowers users to exchange unused clothing through direct swaps or a point-based system — promoting *sustainable fashion* and reducing *textile waste*. 🌍✨

---

## 🌟 Overview

ReWear enables users to:

- ♻️ *Swap* clothing items directly or via points
- 👕 *Upload* and list their unused clothing
- 🛍️ *Browse* a curated feed of items from the community
- 🛡️ *Ensure trust* through admin moderation
- 🌿 Reduce environmental impact

---

## 🚀 Features

### ✅ User Authentication
- Sign up & Login with email/password
- Secure JWT-based sessions

### 🎯 Landing Page
- Platform intro & benefits
- Quick-access buttons: “Start Swapping”, “Browse Items”, “List an Item”
- Featured items carousel

### 👤 User Dashboard
- View profile, earned points
- See uploaded items
- Track ongoing and completed swaps

### 👗 Item Detail Page
- Image gallery and item details
- See uploader's info
- Request a swap or redeem with points
- Status indicator (available / swapped)

### ➕ Add New Item
- Upload images
- Add title, description, category, size, condition, and tags
- Submit listing

### 🛡️ Admin Panel
- Approve or reject listings
- Remove spam or inappropriate content
- Simple interface for moderation

---

## 🧱 Tech Stack

### 🔧 Frontend
- *React 19, **Vite, **Tailwind CSS*
- Routing: react-router-dom
- Notifications: react-toastify
- UI Icons: react-icons, lucide-react, boxicons
- 3D integration: @splinetool/react-spline

### 🖥️ Backend
- *Node.js* with *Express*
- Authentication: jsonwebtoken, bcryptjs
- File uploads: multer
- Email service: nodemailer
- Database: MongoDB via mongoose
- Environment variables: dotenv

---

## 📁 Project Structure