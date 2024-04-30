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

export function getNextIndex(arrayLength: number, currentIndex: number) {
	if (currentIndex < 0 || arrayLength <= 0 || currentIndex >= arrayLength) { return undefined; }
	if (currentIndex === arrayLength - 1) { return 0; }
	return currentIndex++;
}

export function getPrevIndex(arrayLength: number, currentIndex: number) {
	if (currentIndex < 0 || arrayLength <= 0 || currentIndex >= arrayLength) { return undefined; }
	if (currentIndex === 0) { return arrayLength - 1; }
	return currentIndex--;
}
