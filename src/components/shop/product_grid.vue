<script setup>
import { ref, onMounted } from 'vue';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils';
import { getLinkForm } from '../../scripts/routingUtils';

const props = defineProps(['formData', 'sortKeyMapping', 'productPage', 'lang']);
const { order, filters } = props.formData;
const { formMethod, catalogue, firstPage, previousPage, currentPage, nextPage, lastPage } = props.productPage;

const { lang } = props;
const translate = useTranslations(lang);

const aside = ref(null);
const asideCloseButton = ref(null);
const asideOpenButton = ref(null);
const productGridLabel = ref(null);

const filterForm = ref(null);
const filterFormSubmitButton = ref(null);
const firstPageButton = ref(null);
const prevPageButton = ref(null);
const nextPageButton = ref(null);
const lastPageButton = ref(null);

function postToPage(pageUrl) {
	filterForm.value.action = getRelativeLocaleUrl(lang, pageUrl, { prependWith: "shop"});
	filterForm.value.submit();
}

onMounted(() => {
	asideCloseButton.value.addEventListener("click", () => {
		aside.value.classList.toggle("hidden");
	});

	asideOpenButton.value.addEventListener("click", () => {
		aside.value.classList.toggle("hidden");
	});

	filterFormSubmitButton.value.addEventListener("click", () => { postToPage(firstPage); });
	if (formMethod === "POST") {
		firstPageButton.value.addEventListener("click", () => { postToPage(firstPage) });
		prevPageButton.value.addEventListener("click", () => { postToPage(previousPage) });
		nextPageButton.value.addEventListener("click", () => { postToPage(nextPage) });
		lastPageButton.value.addEventListener("click", () => { postToPage(lastPage) });
	}
});
</script>

<template>
	<div id="productGridContainer" class="w-full flex items-center justify-center">
		<div class="w-full lg:w-4/5 px-8 py-10 flex flex-col lg:flex-row items-start justify-center">

			<div class="w-full lg:hidden flex items-center justify-center">
				<div class="w-full h-auto px-3.5 py-2.5 flex items-center justify-center">
					<button ref="asideOpenButton"
						class="group w-full px-3.5 py-2.5 rounded-md flex items-center justify-center bg-orange-200 hover:bg-red-300 dark:bg-stone-700 hover:dark:bg-red-400">
						<div class="flex items-center justify-center mr-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem"
								class="bi bi-sliders fill-stone-800 dark:fill-orange-100 group-hover:fill-stone-800"
								viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
							</svg>
						</div>
						<p class="text-base xs:text-lg leading-6 group-hover:text-stone-800">{{
							translate('shop.filterButton') }}</p>
					</button>
				</div>
			</div>

			<aside ref="aside"
				class="z-50 hidden lg:block w-full h-full sm:w-1/2 md:w-1/3 sm:h-full lg:w-[22.5%] lg:h-auto px-8 py-10 lg:px-3.5 lg:py-2.5 text-left fixed lg:sticky left-0 right-0 bottom-0 lg:top-0 sm:border-r-[3px] lg:border-none border-orange-200 dark:border-stone-700 bg-orange-100 dark:bg-stone-800 lg:bg-transparent">
				<div class="flex items-center justify-between lg:justify-start">
					<h2 class="inline font-bold text-2xl leading-6">Bộ Lọc</h2>
					<button ref="asideCloseButton"
						class="inline lg:hidden ml-2 font-bold text-2xl leading-6 hover:text-red-300 dark:hover:text-red-400">⨉</button>
				</div>
				<hr class="border-stone-800 dark:border-orange-100 my-5 px-3.5">

				<form ref="filterForm" method="POST">
					<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
						<legend class="text-lg font-semibold mb-1">{{ translate('shop.filterForm.sortBy') }}</legend>

						<p v-for="(value, key) in props.sortKeyMapping">
							<input type="radio" name="order"
								v-bind="{ id: `order_${key}`, value: key, checked: order === key || order === '' && key === 'category_asc' }"
								class="mr-2" />
							<label for="{{ `order_${key}` }}">{{ value.label }}</label>
						</p>
					</fieldset>

					<hr class="border-stone-800 dark:border-orange-100 my-5 px-3.5">

					<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
						<legend class="text-lg font-semibold mb-1">{{ translate('shop.filterForm.filterBy') }}</legend>

						<p v-for="({ category, translations }, index) in catalogue.categories">
							<input type="checkbox" name="filter"
								v-bind="{ id: `filter_${index}`, value: category, checked: filters.includes(category) }"
								class="mr-2" />
							<label v-if="lang === defaultLang" for={{ `filter_${index}` }}>{{ category }}</label>
							<label v-else for={{ `filter_${index}` }}>{{ (translations && translations[lang]) ?
								translations[lang] : category }}</label>
						</p>
					</fieldset>

					<div class="w-full flex items-center justify-center mb-0 md:mb-5">
						<button ref="filterFormSubmitButton" type="submit"
							class="px-3.5 py-2.5 rounded-md bg-orange-200 hover:bg-red-300 dark:bg-stone-700 dark:hover:bg-red-400">{{
								translate('shop.filterForm.viewResults') }}</button>
					</div>
				</form>
			</aside>

			<section class="w-full lg:w-[77.5%] px-3.5 py-2.5">
				<h2 ref="productGridLabel" class="font-bold text-2xl mb-5">{{ translate('shop.productGrid.title') }}
				</h2>

				<div
					class="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
					<a v-for="product of catalogue.products"
						:href="getRelativeLocaleUrl(lang, getLinkForm(product.name), { prependWith: 'shop/product' })"
						class="group w-full aspect-[2/1] xs:aspect-[4/5] flex flex-row xs:flex-col items-center justify-between rounded-lg bg-orange-200 dark:bg-stone-700">
						<div
							class="relative w-full h-full xs:h-auto aspect-auto xs:aspect-square hidden 3xs:flex items-center justify-center bg-orange-300 dark:bg-stone-900 rounded-l-lg xs:rounded-none xs:rounded-t-lg">
							<div v-if="!product.media"
								class="w-full h-full xs:w-full xs:h-auto aspect-auto xs:aspect-square flex flex-col items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%"
									class="bi bi-image fill-stone-800/50 dark:fill-orange-200/50" viewBox="0 0 16 16">
									<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
									<path
										d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
								</svg>

								<p
									class="mt-1 text-xs xs:text-base text-stone-800/50 dark:text-orange-200/50 text-center">
									{{ translate('image.fallback.text') }}</p>
							</div>

							<img v-else :src="product.media.thumbnail.src" :alt="product.media.thumbnail.alt"
								loading="lazy"
								class="w-full h-full xs:h-auto aspect-auto xs:aspect-square object-cover rounded-l-lg xs:rounded-none xs:rounded-t-lg">

							<div
								class="hidden group-hover:block absolute opacity-50 w-full h-full xs:h-auto aspect-auto xs:aspect-square top-0 rounded-l-lg xs:rounded-none xs:rounded-t-lg group-hover:bg-stone-800">
								<svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%"
									class="bi bi-box-arrow-up-right absolute top-[35%] right-[35%] group-hover:opacity-100 fill-orange-200"
									viewBox="0 0 16 16">
									<path fill-rule="evenodd"
										d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5">
									</path>
									<path fill-rule="evenodd"
										d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z">
									</path>
								</svg>
							</div>
						</div>

						<div
							class="grow w-full h-full xs:h-auto px-3.5 py-2.5 flex flex-col items-start justify-center rounded-lg 3xs:rounded-none 3xs:rounded-r-lg xs:rounded-none xs:rounded-b-lg group-hover:text-stone-800 group-hover:bg-red-300 dark:group-hover:bg-red-400">
							<p
								class="xs:grow font-semibold text-base 2xs:text-lg xs:line-clamp-2 sm:line-clamp-3 text-ellipsis overflow-hidden">
								{{
									product.name }}</p>
							<p class="text-sm 2xs:text-base">{{ product.price }} {{ translate("currency") }}</p>
							<p class="mt-2 text-xs italic">{{ product.category }}</p>
						</div>
					</a>
				</div>
			</section>
		</div>
	</div>

	<div class="w-full lg:w-4/5 lg:mx-auto px-8 py-10 pt-0 flex items-center justify-center">
		<nav class="w-full px-3.5 flex items-center justify-center">
			<!-- tailwind invisibility instead of vue v-show to maintain positioning in the DOM  -->

			<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, firstPage, { prependWith: 'shop' })"
				:class="{ invisible: !previousPage || currentPage === firstPage }"
				class="order-first self-stretch aspect-square mr-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-backward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5" />
				</svg>
			</a>
			<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, previousPage, { prependWith: 'shop' })"
				:class="{ invisible: !previousPage }"
				class="order-2 self-stretch aspect-square mr-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-start-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z" />
				</svg>
			</a>
			<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, nextPage, { prependWith: 'shop' })"
				:class="{ invisible: !nextPage }"
				class="order-4 self-stretch aspect-square ml-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-end-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z" />
				</svg>
			</a>
			<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, lastPage, { prependWith: 'shop' })"
				:class="{ invisible: !nextPage || currentPage === lastPage }"
				class="order-last self-stretch aspect-square ml-2 flex items-center justify-center">

				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-forward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5" />
				</svg>
			</a>

			<button ref="firstPageButton" v-if="formMethod === 'POST'" :class="{ invisible: !previousPage || currentPage === firstPage }" class="order-first self-stretch aspect-square mr-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-backward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5" />
				</svg>
			</button>
			<button ref="prevPageButton" v-if="formMethod === 'POST'"
				:class="{ invisible: !previousPage }"
				class="order-2 self-stretch aspect-square mr-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-start-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z" />
				</svg>
			</button>
			<button ref="nextPageButton" v-if="formMethod === 'POST'"
				:class="{ invisible: !nextPage }"
				class="order-4 self-stretch aspect-square ml-2 flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-end-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z" />
				</svg>
			</button>
			<button ref="lastPageButton" v-if="formMethod === 'POST'"
				:class="{ invisible: !nextPage || currentPage === lastPage }"
				class="order-last self-stretch aspect-square ml-2 flex items-center justify-center">

				<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
					class="bi bi-skip-forward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
					<path
						d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5" />
				</svg>
			</button>

			<p class="order-3 px-5 py-2.5 rounded-full font-semibold text-lg bg-orange-200 dark:bg-stone-700">{{
				currentPage }}
			</p>
		</nav>
	</div>
</template>
