<script setup>
import { ref, onMounted } from 'vue';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { useTranslations } from '../../i18n/utils';
import { getLinkForm } from '../../scripts/routingUtils';

const props = defineProps(['formData', 'sortKeyMapping', 'catalogue', 'lang']);
const { order, filter } = props.formData;

const { lang } = props;
const translate = useTranslations(lang);

const aside = ref(null);
const asideCloseButton = ref(null);
const asideOpenButton = ref(null);
const productGridLabel = ref(null);

onMounted(() => {
	asideCloseButton.value.addEventListener("click", () => {
		aside.value.classList.toggle("hidden");
	});

	asideOpenButton.value.addEventListener("click", () => {
		aside.value.classList.toggle("hidden");
	});
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
						<p class="text-base xs:text-lg leading-6 group-hover:text-stone-800">{{ translate('shop.filterButton') }}</p>
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

				<form method="POST">
					<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
						<legend class="text-lg font-semibold mb-1">{{ translate('shop.filterForm.sortBy') }}</legend>

						<p v-for="(value, key) in props.sortKeyMapping">
							<input type="radio" name="order"
								v-bind="{ id: `order_${key}`, value: key, checked: order === key || order === '' && key === 'name_asc' }"
								class="mr-2" />
							<label for="{{ `order_${key}` }}">{{ value.label }}</label>
						</p>
					</fieldset>

					<hr class="border-stone-800 dark:border-orange-100 my-5 px-3.5">

					<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
						<legend class="text-lg font-semibold mb-1">{{ translate('shop.filterForm.filterBy') }}</legend>

						<p v-for="({ category }, index) in props.catalogue.categories">
							<input type="checkbox" name="filter"
								v-bind="{ id: `filter_${index}`, value: category, checked: filter.includes(category) }"
								class="mr-2" />
							<label for={{ `filter_${index}` }}>{{ category }}</label>
						</p>
					</fieldset>

					<div class="w-full flex items-center justify-center mb-0 md:mb-5">
						<button type="submit"
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
					<a v-for="product of props.catalogue.products"
						:href="getRelativeLocaleUrl(lang, getLinkForm(product.name), { prependWith: 'shop' })"
						class="group w-full aspect-auto xs:aspect-[4/5] flex flex-row xs:flex-col items-center justify-between rounded-lg bg-orange-200 dark:bg-stone-700">
						<div
							class="relative w-full aspect-square hidden 3xs:flex items-center justify-center bg-orange-300 dark:bg-stone-900 rounded-l-lg xs:rounded-none xs:rounded-t-lg">
							<div v-if="!product.media" class="w-full aspect-square flex flex-col items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%"
									class="bi bi-image fill-stone-800/50 dark:fill-orange-200/50" viewBox="0 0 16 16">
									<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
									<path
										d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
								</svg>

								<p class="mt-1 text-xs xs:text-base text-stone-800/50 dark:text-orange-200/50 text-center">No image available</p>
							</div>

							<img v-else :src="product.media.thumbnail.src" :alt="product.media.thumbnail.alt"
								loading="lazy"
								class="w-full aspect-square object-cover rounded-l-lg xs:rounded-none xs:rounded-t-lg">

							<div
								class="hidden group-hover:block absolute opacity-50 w-full aspect-square top-0 rounded-l-lg xs:rounded-none xs:rounded-t-lg group-hover:bg-stone-800">
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
							class="grow w-full h-full xs:h-auto px-3.5 py-2.5 flex flex-col items-start justify-center rounded-r-lg xs:rounded-none xs:rounded-b-lg group-hover:text-stone-800 group-hover:bg-red-300 dark:group-hover:bg-red-400">
							<p class="font-semibold text-base 2xs:text-lg xs:line-clamp-2 sm:line-clamp-3 text-ellipsis overflow-hidden">{{
								product.name }}</p>
							<p class="mt-1">{{ product.price }}</p>
						</div>
					</a>
				</div>
			</section>

		</div>
	</div>
</template>
