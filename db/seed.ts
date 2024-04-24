import { db, Product } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Product).values([
		{ name: "Bocchi the Scream", description: "Bocchi the Screaming Rock Star", category: "artwork", price: 69420 },
		{ name: "Yukito Laughing at You", description: "Yukito, also more commonly known as Yukko, is laughing at you", category: "artwork", price: 12345 },
		{ name: "Nano Drinking Gas", description: "Look! Nano is drinking gasoline", category: "artwork", price: 10101 },
		{ name: "Wireless Bluetooth Headphones", description: "High-quality sound and comfortable design. Perfect for music lovers on the go.", category: "Electronics", price: 3499 },
		{ name: "Stainless Steel Water Bottle", description: "Durable and eco-friendly water bottle, keeps your drinks hot or cold for hours.", category: "Kitchen & Dining", price: 1999 },
		{ name: "Cotton Blend T-Shirt", description: "Soft and breathable cotton blend t-shirt for everyday wear.", category: "Apparel", price: 1499 },
		{ name: "Portable Power Bank", description: "Compact and powerful power bank to keep your devices charged anytime, anywhere.", category: "Electronics", price: 2499 },
		{ name: "Canvas Backpack", description: "Spacious and stylish backpack for school, work, or travel.", category: "Luggage & Bags", price: 2999 },
		{ name: "Scented Soy Candle", description: "Relaxing aroma therapy candle made from natural soy wax.", category: "Home & Kitchen", price: 999 },
		{ name: "Leather Wallet", description: "Classic leather wallet with multiple card slots and a secure coin pocket.", category: "Accessories", price: 1999 },
		{ name: "Gaming Mouse", description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.", category: "Electronics", price: 3999 },
		{ name: "Yoga Mat", description: "Non-slip yoga mat for practicing yoga or pilates.", category: "Fitness & Exercise", price: 2499 },
		{ name: "Stainless Steel Kitchen Knife Set", description: "Professional-grade knife set for all your culinary needs.", category: "Kitchen & Dining", price: 5999 },
		{ name: "Graphic Print Hoodie", description: "Trendy hoodie featuring unique graphic prints, perfect for casual outings.", category: "Apparel", price: 2799 },
		{ name: "Bluetooth Speaker", description: "Compact and portable Bluetooth speaker for enjoying music on the move.", category: "Electronics", price: 1999 },
		{ name: "Travel Neck Pillow", description: "Soft and supportive neck pillow for comfortable travel.", category: "Travel Accessories", price: 1499 },
		{ name: "Organic Green Tea", description: "Premium organic green tea leaves for a refreshing and healthy beverage.", category: "Food & Beverages", price: 999 },
		{ name: "Digital Alarm Clock", description: "Modern digital alarm clock with multiple alarm settings and a built-in snooze function.", category: "Home & Kitchen", price: 1499 },
		{ name: "Resistance Bands Set", description: "Versatile resistance bands set for home workouts or physical therapy.", category: "Fitness & Exercise", price: 1999 },
		{ name: "Glass Food Storage Containers", description: "Durable glass containers for storing and reheating food.", category: "Kitchen & Dining", price: 2999 },
		{ name: "Smartphone Ring Holder", description: "Convenient ring holder for smartphones, offering a secure grip and stand function.", category: "Phone Accessories", price: 999 },
		{ name: "Leather Journal Notebook", description: "Handcrafted leather journal notebook for jotting down thoughts and ideas.", category: "Stationery", price: 1599 },
		{ name: "Wireless Charging Pad", description: "Sleek and efficient wireless charging pad compatible with Qi-enabled devices.", category: "Electronics", price: 1999 }
	]);
}
