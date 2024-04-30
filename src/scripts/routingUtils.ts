export function getLinkForm(text: string) {
	if (!text) { return text; }
	return text.replaceAll(/\s/g, "-");
}

export function getOriginalForm(link: string) {
	if (!link) { return link; }
	return link.replaceAll(/-/g, " ");
}

export function chunkArray(array: any[], chunkSize: number) {
	if (chunkSize <= 0) { return undefined; }
	if (chunkSize === array.length) { return array; }

	const chunks = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunks.push(array.slice(i, i + chunkSize));
	}
	return chunks;
}
