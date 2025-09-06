# Chatty - MERN Chat App

A real-time chat application built with MongoDB, Express.js, React.js, and Node.js.

## 🚀 Live Demo
**[https://mern-chatapp-b8dv.onrender.com/](https://mern-chatapp-b8dv.onrender.com/)**

## Features
- Real-time messaging with Socket.io
- User authentication
- Online/offline status
- Contact list
- Message history

## Tech Stack
- **Frontend**: React.js, Socket.io-client
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB

## Installation

```bash
# Clone repository
git clone https://github.com/yourusername/mern-chatapp.git
cd mern-chatapp

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
npm start
```

## Environment Variables
Create `.env` in backend folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatty
JWT_SECRET=your_jwt_secret
```

## Usage
1. Register/Login
2. Select contact from sidebar
3. Start chatting in real-time

## Scripts
```bash
# Development
npm run dev    # Backend
npm start      # Frontend

# Production
npm start      # Backend
npm run build  # Frontend
```
