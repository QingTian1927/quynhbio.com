import { getCollection } from "astro:content";

function filterUniqueTags(entries) {
	const seenTags = [];
	entries.forEach((entry) => {
		entry.data.tags.map((tag) => {
			if (!seenTags.includes(tag)) { seenTags.push(tag); }
		})
	})
	return seenTags;
}

export async function getUniqueBlogTags() {
	const entries = await getCollection("blog");
	return filterUniqueTags(entries);
}
