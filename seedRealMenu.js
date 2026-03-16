import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Item from './models/Item.js';

dotenv.config();

const items = [
  // --- BIRYANI ---
  { name: 'Chicken Dum Biryani', description: 'Authentic Hyderabadi chicken dum biryani', price: 290, category: 'Biryani', image: '/img/menu/biryani.png', isAvailable: true },
  { name: 'Mutton Biryani', description: 'Tender mutton pieces cooked with aromatic basmati rice', price: 350, category: 'Biryani', image: '/img/menu/biryani.png', isAvailable: true },
  { name: 'Veg Biryani', description: 'Mixed vegetables dum biryani', price: 220, category: 'Biryani', image: '/img/menu/biryani.png', isAvailable: true },
  { name: 'Prawns Biryani', description: 'Spicy and flavorful prawns biryani', price: 380, category: 'Biryani', image: '/img/menu/biryani.png', isAvailable: true },
  { name: 'Paneer Biryani', description: 'Aromatic biryani with soft paneer cubes', price: 260, category: 'Biryani', image: '/img/menu/biryani.png', isAvailable: true },
  { name: 'Special Chicken Biryani', description: 'Boneless chicken special biryani', price: 320, category: 'Biryani', image: '/img/menu/biryani.png', isAvailable: true },
  
  // --- STARTERS ---
  { name: 'Chicken 65', description: 'Spicy, deep-fried chicken bites', price: 250, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },
  { name: 'Chilli Chicken', description: 'Classic Indo-chinese spicy chicken', price: 260, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },
  { name: 'Chicken Manchurian', description: 'Fried chicken balls in spicy sauce', price: 260, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },
  { name: 'Apollo Fish', description: 'Hyderabadi style spicy fish fry', price: 320, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },
  { name: 'Gobi Manchurian', description: 'Crispy cauliflower tossed in manchurian sauce', price: 180, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },
  { name: 'Paneer 65', description: 'Spicy and crispy paneer cubes', price: 220, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },
  { name: 'Loose Prawns', description: 'Crispy fried prawns tossed with garlic', price: 350, category: 'Starters', image: '/img/menu/starter.png', isAvailable: true },

  // --- NON-VEG CURRIES ---
  { name: 'Butter Chicken', description: 'Rich and creamy tomato butter gravy with chicken', price: 280, category: 'Non-Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Andhra Chicken Curry', description: 'Spicy traditional Andhra style chicken curry', price: 270, category: 'Non-Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Mutton Rogan Josh', description: 'Classic Kashmiri mutton curry', price: 380, category: 'Non-Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Kadai Chicken', description: 'Thick chicken gravy wok-tossed with capsicum', price: 280, category: 'Non-Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Fish Curry', description: 'Coastal style tangy fish curry', price: 300, category: 'Non-Veg', image: '/img/menu/curry.png', isAvailable: true },

  // --- VEG CURRIES ---
  { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato gravy', price: 240, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Kadai Paneer', description: 'Paneer cooked with bell peppers and spices', price: 240, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight', price: 190, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Mixed Veg Curry', description: 'Assorted seasonal vegetables in homestyle gravy', price: 180, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Dal Tadka', description: 'Yellow lentils tempered with garlic and cumin', price: 150, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },

  // --- MEALS / BREADS ---
  { name: 'South Indian Full Meals', description: 'Authentic thali with rice, sambar, rasam, curries, and sweet', price: 200, category: 'Meals', image: '/img/menu/meals.png', isAvailable: true },
  { name: 'North Indian Thali', description: 'Complete thali with roti, rice, paneer, dal, and sweet', price: 220, category: 'Meals', image: '/img/menu/meals.png', isAvailable: true },
  { name: 'Chicken Meals', description: 'Rice with chicken curry, dry chicken, and accompaniments', price: 250, category: 'Meals', image: '/img/menu/meals.png', isAvailable: true },
  { name: 'Butter Naan', description: 'Soft tandoori flatbread brushed with butter', price: 50, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Garlic Naan', description: 'Tandoori flatbread topped with minced garlic', price: 60, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },
  { name: 'Tandoori Roti', description: 'Whole wheat flatbread baked in tandoor', price: 30, category: 'Veg', image: '/img/menu/curry.png', isAvailable: true },

  // --- DESSERTS ---
  { name: 'Gulab Jamun (2 pcs)', description: 'Soft milk dumplings in rose flavored sugar syrup', price: 80, category: 'Desserts', image: '/img/menu/dessert.png', isAvailable: true },
  { name: 'Rasmalai (2 pcs)', description: 'Cottage cheese dumplings in sweetened thick milk', price: 120, category: 'Desserts', image: '/img/menu/dessert.png', isAvailable: true },
  { name: 'Double Ka Meetha', description: 'Traditional bread pudding dessert of Hyderabad', price: 140, category: 'Desserts', image: '/img/menu/dessert.png', isAvailable: true },
  { name: 'Qubani Ka Meetha', description: 'Apricot sweet garnished with almonds', price: 150, category: 'Desserts', image: '/img/menu/dessert.png', isAvailable: true },

  // --- BEVERAGES ---
  { name: 'Sweet Lassi', description: 'Churned thick yogurt drink', price: 80, category: 'Beverages', image: '/img/menu/beverage.png', isAvailable: true },
  { name: 'Salted Lassi', description: 'Churned yogurt drink with roasted cumin', price: 70, category: 'Beverages', image: '/img/menu/beverage.png', isAvailable: true },
  { name: 'Masala Chaas', description: 'Spiced Indian buttermilk', price: 60, category: 'Beverages', image: '/img/menu/beverage.png', isAvailable: true },
  { name: 'Fresh Lime Soda', description: 'Refreshing lime drink (sweet/salt)', price: 70, category: 'Beverages', image: '/img/menu/beverage.png', isAvailable: true },
  { name: 'Filter Coffee', description: 'Authentic South Indian filter coffee', price: 50, category: 'Beverages', image: '/img/menu/beverage.png', isAvailable: true },
  { name: 'Masala Chai', description: 'Indian spiced milk tea', price: 40, category: 'Beverages', image: '/img/menu/beverage.png', isAvailable: true },
];

const seedMenu = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    await Item.deleteMany({});
    await Item.insertMany(items);
    
    console.log(`Successfully seeded ${items.length} authentic menu items!`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding menu:', error);
    process.exit(1);
  }
};

seedMenu();
