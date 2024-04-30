import { db, or, eq, asc, desc } from 'astro:db';
import { Product, ProductCategories } from 'astro:db';

export async function retrieveCategories() {
	return db.select().from(ProductCategories);
}

export async function getProductByName(name: string) {
	if (!name) { return []; }
	return await db.select().from(Product).where(eq(Product.name, name));
}

export async function getProductById(id: number) {
	if (!id) { return []; }
	return await db.select().from(Product).where(eq(Product.id, id));
}

export function getProductSortKey(column: string, order: string) {
	const orderMapping = {
		"asc": (col) => asc(col),
		"desc": (col) => desc(col),
	}

	if (orderMapping[order] !== undefined) {
		return () => orderMapping[order](Product[column]);
	}
	return () => "";
}

// TODO: specify type.

export async function queryProducts(sortKeyMapping = undefined, order = undefined, filters = undefined) {
	if (!sortKeyMapping && !order && !filters) {
		return db.select().from(Product);
	}

	const cannotRetrieveKey = (
		order === undefined ||
		sortKeyMapping === undefined ||
		sortKeyMapping[order] === undefined ||
		sortKeyMapping[order].sortKey === undefined
	);
	const sortKey = (cannotRetrieveKey) ? '' : sortKeyMapping[order].sortKey();

	if (filters.length <= 0 || filters[0] === "" || filters === undefined) {
		return db.select().from(Product).orderBy(sortKey);
	}
	const filterKeys = filters.map((filter) => eq(Product.category, filter));

	return db.select().from(Product).where(or(...filterKeys)).orderBy(sortKey);
}
