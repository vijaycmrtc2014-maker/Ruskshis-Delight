import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Item from './models/Item.js';

dotenv.config();

const items = [
  { itemCode: 'RDS001', name: 'Margarita Pizza', category: 'Pizza', variant: 'Regular', price: 109, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', isAvailable: true },
  { itemCode: 'RDS002', name: 'Margarita Pizza', category: 'Pizza', variant: 'Medium', price: 209, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', isAvailable: true },
  { itemCode: 'RDS003', name: 'Margarita Pizza', category: 'Pizza', variant: 'Large', price: 329, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS061', name: 'Garlic Bread', category: 'Garlic Bread', variant: 'Standard', price: 89, image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS073', name: 'Classic Veg Burger', category: 'Burger', variant: 'Single', price: 69, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80', isAvailable: true },
  { itemCode: 'RDS079', name: 'Classic Veg Burger', category: 'Burger', variant: 'Meal', price: 139, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS139', name: 'French Fries', category: 'Snacks', variant: 'Small', price: 59, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80', isAvailable: true },
  { itemCode: 'RDS153', name: 'French Fries', category: 'Snacks', variant: 'Large', price: 99, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS191', name: 'Classic Maggi', category: 'Maggi', variant: 'Regular', price: 59, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS203', name: 'Veg Wrap', category: 'Wrap', variant: 'Regular', price: 79, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS215', name: 'Vanilla Milkshake', category: 'Milkshake', variant: 'Regular', price: 89, image: 'https://images.unsplash.com/photo-1572490122747-3968b75bb8ef?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS240', name: 'Vanilla Ice Cream', category: 'Ice Cream', variant: 'Regular', price: 59, image: 'https://images.unsplash.com/photo-1557142046-c704a3adf8ac?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS250', name: 'Watermelon Mojito', category: 'Mojito', variant: 'Regular', price: 59, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS258', name: 'Banana Smoothie', category: 'Smoothie', variant: 'Regular', price: 99, image: 'https://images.unsplash.com/photo-1553530666-ba11a91341a0?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS269', name: 'Watermelon Juice', category: 'Juice', variant: 'Regular', price: 59, image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS276', name: 'Chicken Popcorn (10 pcs)', category: 'Chicken Snacks', variant: 'Regular', price: 109, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS286', name: 'Fruit Bowl', category: 'Salads', variant: 'Regular', price: 89, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80', isAvailable: true },
  
  { itemCode: 'RDS294', name: 'Italian Red Sauce Pasta', category: 'Pasta', variant: 'Regular', price: 169, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80', isAvailable: true },
  { itemCode: 'RDS295', name: 'Italian White Sauce Pasta', category: 'Pasta', variant: 'Regular', price: 179, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&q=80', isAvailable: true },
];

export const seedVariantMenu = async () => {
  try {
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log(`Successfully seeded ${items.length} variant menu items!`);
  } catch (error) {
    console.error('Error seeding menu:', error);
  }
};
