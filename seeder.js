import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Item from './models/Item.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected to seed data');

    await User.deleteMany();
    await Item.deleteMany();

    // Create Admin User
    const adminUser = new User({
      name: 'Admin',
      email: 'admin@rukshis.com',
      phone: '1234567890',
      password: 'password123',
      role: 'Admin'
    });

    const kitchenUser = new User({
      name: 'Kitchen',
      email: 'kitchen@rukshis.com',
      phone: '0987654321',
      password: 'password123',
      role: 'Kitchen'
    });

    // Create Sample Items
    const sampleItems = [
      { name: 'Veg Biryani', description: 'Aromatic basmati rice cooked with fresh vegetables and secret spices.', price: 250, category: 'Biryani' },
      { name: 'Chicken Dum Biryani', description: 'Hyderabadi style slow-cooked chicken and basmati rice.', price: 350, category: 'Biryani' },
      { name: 'Paneer Tikka', description: 'Grilled paneer cubes marinated in yogurt and spices.', price: 200, category: 'Starters' },
      { name: 'Gulab Jamun', description: 'Sweet fried dumplings soaked in rose syrup.', price: 100, category: 'Desserts' }
    ];

    await adminUser.save();
    await kitchenUser.save();
    await Item.insertMany(sampleItems);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
