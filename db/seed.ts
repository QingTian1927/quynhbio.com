import { db, Product, ProductCategories } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(ProductCategories).values([
		{ category: "Artworks" },
		{ category: "Electronics" },
		{ category: "Waifus" },
		{ category: "Skincare" },
		{ category: "Makeup" },
		{ category: "Haircare" },
		{ category: "Fragrance" },
		{ category: "Bath & Body" },
		{ category: "Tools & Accessories" },
		{ category: "Men's Grooming" },
		{ category: "Wellness" },
		{ category: "Nail Care" },
		{ category: "Gift Sets" },
	]);

	await db.insert(Product).values([
		{ name: "Yukito Laughing at You", category: "Artworks", price: 12345 },
		{ name: "Bocchi the Scream", category: "Artworks", price: 69420 },
		{ name: "Nintendo Switch", category: "Electronics", price: 9999 },
		{ name: "Noa", category: "Waifus", price: 99999 },

		{ name: "Hydrating Face Serum", category: "Skincare", price: 29.99 },
		{ name: "Matte Lipstick", category: "Makeup", price: 14.50 },
		{ name: "Repairing Shampoo", category: "Haircare", price: 12.99 },
		{ name: "Eau de Parfum", category: "Fragrance", price: 49.99 },
		{ name: "Body Scrub", category: "Bath & Body", price: 19.99 },
		{ name: "Makeup Brushes Set", category: "Tools & Accessories", price: 24.99 },
		{ name: "Beard Oil", category: "Men's Grooming", price: 17.99 },
		{ name: "Herbal Supplements", category: "Wellness", price: 39.99 },
		{ name: "Nail Strengthener", category: "Nail Care", price: 9.99 },
		{ name: "Spa Gift Basket", category: "Gift Sets", price: 59.99 },

		{ name: "Moisturizing Cream", category: "Skincare", price: 19.99 },
		{ name: "Facial Cleanser", category: "Skincare", price: 12.99 },
		{ name: "Anti-Aging Serum", category: "Skincare", price: 34.99 },
		{ name: "Sunscreen SPF 50", category: "Skincare", price: 15.99 },
		{ name: "Eye Cream", category: "Skincare", price: 27.99 },

		{ name: "Liquid Foundation", category: "Makeup", price: 22.50 },
		{ name: "Mascara", category: "Makeup", price: 10.99 },
		{ name: "Eyeliner Pencil", category: "Makeup", price: 8.99 },
		{ name: "Lip Gloss", category: "Makeup", price: 9.50 },
		{ name: "Highlighter Palette", category: "Makeup", price: 19.99 },

		{ name: "Conditioning Hair Oil", category: "Haircare", price: 16.99 },
		{ name: "Volumizing Shampoo", category: "Haircare", price: 14.99 },
		{ name: "Hair Mask", category: "Haircare", price: 18.50 },
		{ name: "Hair Styling Gel", category: "Haircare", price: 11.99 },
		{ name: "Heat Protectant Spray", category: "Haircare", price: 13.99 },

		{ name: "Perfume Rollerball", category: "Fragrance", price: 29.99 },
		{ name: "Cologne Spray", category: "Fragrance", price: 44.99 },
		{ name: "Body Mist", category: "Fragrance", price: 12.99 },
		{ name: "Scented Candle", category: "Fragrance", price: 17.50 },
		{ name: "Perfume Sampler Set", category: "Fragrance", price: 39.99 },

		{ name: "Luxury Body Lotion", category: "Bath & Body", price: 21.99 },
		{ name: "Shower Gel", category: "Bath & Body", price: 10.99 },
		{ name: "Bath Bomb Set", category: "Bath & Body", price: 24.50 },
		{ name: "Body Butter", category: "Bath & Body", price: 16.99 },
		{ name: "Exfoliating Body Wash", category: "Bath & Body", price: 13.99 },

		{ name: "Makeup Organizer", category: "Tools & Accessories", price: 29.99 },
		{ name: "Travel Mirror", category: "Tools & Accessories", price: 12.50 },
		{ name: "Eyelash Curler", category: "Tools & Accessories", price: 8.99 },
		{ name: "Makeup Sponge Set", category: "Tools & Accessories", price: 9.99 },
		{ name: "Brush Cleansing Pad", category: "Tools & Accessories", price: 7.99 },

		{ name: "After Shave Balm", category: "Men's Grooming", price: 15.99 },
		{ name: "Hair Pomade", category: "Men's Grooming", price: 13.50 },
		{ name: "Facial Scrub", category: "Men's Grooming", price: 11.99 },
		{ name: "Beard Grooming Kit", category: "Men's Grooming", price: 19.99 },
		{ name: "Shaving Brush", category: "Men's Grooming", price: 9.50 },

		{ name: "Sleep Aid Supplement", category: "Wellness", price: 29.99 },
		{ name: "Immune Support Capsules", category: "Wellness", price: 27.50 },
		{ name: "Detox Tea", category: "Wellness", price: 14.99 },
		{ name: "Energy Boost Drink Mix", category: "Wellness", price: 19.99 },
		{ name: "Probiotic Gummies", category: "Wellness", price: 21.99 },

		{ name: "Cuticle Oil", category: "Nail Care", price: 8.99 },
		{ name: "Nail Polish Remover", category: "Nail Care", price: 5.99 },
		{ name: "Base Coat", category: "Nail Care", price: 7.50 },
	]);
}
