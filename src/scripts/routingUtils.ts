export function getLinkForm(text: string) {
	if (!text) { return text; }
	return text.replaceAll(/\s/g, "-");
}

export function getOriginalForm(link: string) {
	if (!link) { return link; }
	return link.replaceAll(/-/g, " ");
}
