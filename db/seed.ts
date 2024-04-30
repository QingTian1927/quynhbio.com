import { db, Product, ProductCategories } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(ProductCategories).values([
		{ category: "Artworks" },
		{ category: "Electronics" },
		{ category: "Waifus" },
	]);

	await db.insert(Product).values([
		{ name: "Yukito Laughing at You", category: "Artworks", price: 12345 },
		{ name: "Bocchi the Scream", category: "Artworks", price: 69420 },
		{ name: "Nintendo Switch", category: "Electronics", price: 9999 },
		{ name: "Noa", category: "Waifus", price: 99999 },
	]);
}
