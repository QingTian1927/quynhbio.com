import { getProductSortKey } from '../../scripts/databaseUtils';
import { ui } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';

export function getSortKeyMapping(lang: keyof typeof ui) {
    const translate = useTranslations(lang);

	return {
		name_asc: {
			sortKey: getProductSortKey("name", "asc"),
			label: translate("shop.filterForm.nameAsc"),
		},
		name_desc: {
			sortKey: getProductSortKey("name", "desc"),
			label: translate("shop.filterForm.nameDesc"),
		},
		category_asc: {
			sortKey: getProductSortKey("category", "asc"),
			label: translate("shop.filterForm.categoryAsc"),
		},
		category_desc: {
			sortKey: getProductSortKey("category", "desc"),
			label: translate("shop.filterForm.categoryDesc"),
		},
		price_asc: {
			sortKey: getProductSortKey("price", "asc"),
			label: translate("shop.filterForm.priceAsc"),
		},
		price_desc: {
			sortKey: getProductSortKey("price", "desc"),
			label: translate("shop.filterForm.priceDesc"),
		},
	};
}
