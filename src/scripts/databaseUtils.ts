import { db, or, eq, asc, desc, count } from "astro:db";
import { Product, ProductCategories } from "astro:db";

export async function retrieveCategories() {
	return db
		.select()
		.from(ProductCategories)
		.orderBy(asc(ProductCategories.category));
}

export async function getTotalNumbersOfProducts() {
	const result = await db.select({ value: count(Product.id) }).from(Product);
	return result[0].value;
}

export async function getProductByName(name: string) {
	if (!name) {
		return [];
	}
	return await db.select().from(Product).where(eq(Product.name, name));
}

export async function getProductById(id: number) {
	if (!id) {
		return [];
	}
	return await db.select().from(Product).where(eq(Product.id, id));
}

export const DEFAULT_PAGE_SIZE = 24;

export function getPageOffset(
	pageNumber: number,
	pageSize: number = DEFAULT_PAGE_SIZE
) {
	if (
		pageNumber <= 0 ||
		pageSize <= 0 ||
		pageNumber === undefined ||
		pageSize === undefined
	) {
		return undefined;
	}

	// Converts from 1-based indexing to 0-based indexing and
	// then calculating the offset.

	const offset = (pageNumber - 1) * pageSize;
	return offset;
}

export function getProductSortKey(column: string, order: string) {
	const orderMapping = {
		asc: (col) => asc(col),
		desc: (col) => desc(col),
	};

	if (orderMapping[order] !== undefined) {
		return () => orderMapping[order](Product[column]);
	}
	return () => "";
}

export interface sortKeyMapping {
	[sortOrder: string]: {
		sortKey: Function;
		label: any;
	};
}
export interface queryProductsOptions {
	sortKeyMapping: sortKeyMapping;
	order: FormDataEntryValue;
	filters: FormDataEntryValue[];
}

export type partialSelectFields = {
	[field: string]: (typeof Product)[keyof typeof Product];
};

export function selectAllProductColumns() {
	const fields = {};
	Object.keys(Product).map((key) => {
		fields[key] = Product[key];
	});
	return fields;
}

export function handleQueryOptions(options: queryProductsOptions) {
	const parsedOptions = {
		sortKey: asc(Product.id),
		filterKeys: undefined,
	};

	const { sortKeyMapping, filters } = options;
	const order = (options && options.order) ? options.order.toString() : "";

	const cannotGetSortOrder =
		!order ||
		sortKeyMapping === undefined ||
		sortKeyMapping[order] === undefined ||
		sortKeyMapping[order].sortKey === undefined;
	parsedOptions.sortKey = cannotGetSortOrder
		? ""
		: sortKeyMapping[order].sortKey();

	const cannotGetProductFilters =
		filters.length <= 0 || filters[0] === "" || filters === undefined;
	if (cannotGetProductFilters) {
		parsedOptions["filterKeys"] = undefined;
	} else {
		parsedOptions["filterKeys"] = () =>
			filters.map((filter) => eq(Product.category, filter.toString()));
	}

	return parsedOptions;
}

export async function queryAllProducts(
	pageNumber: number = undefined,
	pageSize: number = DEFAULT_PAGE_SIZE
) {
	if (pageNumber === undefined || pageSize === undefined) {
		return db.select().from(Product).orderBy(asc(Product.category));
	}
	if (pageNumber <= 0 || pageSize <= 0) {
		return undefined;
	}

	const offset = getPageOffset(pageNumber, pageSize);
	return db
		.select()
		.from(Product)
		.limit(pageSize)
		.offset(offset)
		.orderBy(asc(Product.category));
}

export async function queryProducts(
	options: queryProductsOptions = undefined,
	fields: partialSelectFields = undefined,
	pageNumber: number = undefined,
	pageSize: number = DEFAULT_PAGE_SIZE
) {
	const invalidPageOptions =
		(pageNumber !== undefined && pageNumber <= 0) || pageSize <= 0;
	if (invalidPageOptions) {
		return undefined;
	}

	if (!options) {
		return queryAllProducts(pageNumber, pageSize);
	}

	const partials = fields ? fields : selectAllProductColumns();
	const { sortKey, filterKeys } = handleQueryOptions(options);

	if (pageNumber === undefined) {
		if (!filterKeys) {
			return db.select(partials).from(Product).orderBy(sortKey);
		}
		return db
			.select(partials)
			.from(Product)
			.where(or(...filterKeys()))
			.orderBy(sortKey);
	}

	const offset = getPageOffset(pageNumber, pageSize);
	if (!filterKeys) {
		return db
			.select(partials)
			.from(Product)
			.limit(pageSize)
			.offset(offset)
			.orderBy(sortKey);
	}
	return db
		.select(partials)
		.from(Product)
		.where(or(...filterKeys()))
		.limit(pageSize)
		.offset(offset)
		.orderBy(sortKey);
}

export async function countAllMatchingRows(
	filters: FormDataEntryValue[] = undefined
) {
	let result = [{ length: undefined }];

	if (!filters || filters[0] === "") {
		result = await db.select({ length: count(Product.id) }).from(Product);
	} else {
		const filterKeys = () => filters.map((filter) => eq(Product.category, filter.toString()));

		result = filterKeys
			? await db.select({ length: count() }).from(Product).where(or(...filterKeys()))
			: await db.select({ length: count(Product.id) }).from(Product);
	}

	return result[0].length;
}
