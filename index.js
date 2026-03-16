import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from './routes/authRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/notifications', notificationRoutes);

import { MongoMemoryServer } from 'mongodb-memory-server';
import { seedVariantMenu } from './seedVariantMenu.js';
import User from './models/User.js';
import bcrypt from 'bcryptjs';

const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      console.log(`Attempting to connect to ${process.env.MONGO_URI}...`);
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected natively');
    } else {
      throw new Error('No URI provided');
    }
  } catch (err) {
    console.log('Local MongoDB not running. Starting in-memory server...');
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    console.log(`In-memory MongoDB started at ${uri}`);
    
    // Seed DB upon memory start since it is empty
    await seedVariantMenu();

    // Create Admin & Kitchen users
    await User.create({ name: 'Admin', email: 'admin@rukshis.com', password: 'password123', role: 'Admin', phone: '9999999999' });
    await User.create({ name: 'Kitchen', email: 'kitchen@rukshis.com', password: 'password123', role: 'Kitchen', phone: '8888888888' });
    await User.create({ name: 'Delivery Partner', email: 'delivery@rukshis.com', password: 'password123', role: 'Delivery', phone: '7777777777' });
    console.log('Default Admin, Kitchen & Delivery users created (password123)');
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
});
