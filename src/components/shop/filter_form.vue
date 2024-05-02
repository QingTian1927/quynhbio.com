<script setup>
import { ref, onMounted } from 'vue';
import { defaultLang } from '../../i18n/ui';
import { useTranslations } from '../../i18n/utils'

const props = defineProps(['lang', 'categories', 'sortKeyMapping', 'formData']);

const { lang, categories, sortKeyMapping } = props;
const { order, filters } = props.formData;

const translate = useTranslations(lang);

const aside = ref(null);
const asideOverlay = ref(null);
const asideCloseButton = ref(null);
const asideOpenButton = ref(null);

onMounted(() => {
	asideCloseButton.value.addEventListener("click", () => {
		aside.value.classList.toggle("hidden");
		asideOverlay.value.classList.toggle("sm:block");
	});

	asideOpenButton.value.addEventListener("click", () => {
		aside.value.classList.toggle("hidden");
		asideOverlay.value.classList.toggle("sm:block");
	});
})
</script>

<template>
	<div class="w-full lg:hidden flex items-center justify-center">
		<div class="w-full h-auto px-3.5 py-2.5 flex items-center justify-center">
			<button ref="asideOpenButton"
				class="group w-full px-3.5 py-2.5 rounded-md flex items-center justify-center bg-orange-200 hover:bg-red-300 dark:bg-stone-700 hover:dark:bg-red-400">
				<div class="mr-2 flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem"
						class="bi bi-sliders fill-stone-800 dark:fill-orange-100 group-hover:fill-stone-800"
						viewBox="0 0 16 16">
						<path fill-rule="evenodd"
							d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
					</svg>
				</div>
				<p class="leading-6 text-base xs:text-lg group-hover:text-stone-800">{{
					translate('shop.filterButton') }}</p>
			</button>
		</div>
	</div>

	<aside ref="aside"
		class="z-50 hidden lg:block w-full h-full sm:w-1/2 md:w-1/3 sm:h-full lg:w-[22.5%] lg:h-auto px-8 py-10 lg:px-3.5 lg:py-2.5 text-left fixed lg:sticky left-0 right-0 bottom-0 lg:top-0 sm:border-r-[3px] lg:border-none border-orange-200 dark:border-stone-700 bg-orange-100 dark:bg-stone-800 lg:bg-transparent">
		<div class="flex items-center justify-between lg:justify-start">
			<h2 class="inline font-bold text-2xl leading-6">{{ translate('shop.filterForm.title') }}</h2>
			<button ref="asideCloseButton"
				class="inline lg:hidden ml-2 font-bold text-2xl leading-6 hover:text-red-300 dark:hover:text-red-400">
				⨉
			</button>
		</div>
		<hr class="my-5 px-3.5 border-stone-800 dark:border-orange-100">

		<form ref="filterForm" method="POST">
			<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
				<legend class="text-lg font-semibold mb-1">{{ translate('shop.filterForm.sortBy') }}</legend>

				<p v-for="(value, key) in sortKeyMapping">
					<input type="radio" name="order"
						v-bind="{ id: `order_${key}`, value: key, checked: order === key || order === '' && key === 'category_asc' }"
						class="mr-2" />
					<label :for="`order_${key}`">{{ value.label }}</label>
				</p>
			</fieldset>

			<hr class="border-stone-800 dark:border-orange-100 my-5 px-3.5">

			<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
				<legend class="text-lg font-semibold mb-1">{{ translate('shop.filterForm.filterBy') }}</legend>

				<p v-for="({ category, translations }, index) in categories">
					<input type="checkbox" name="filter"
						v-bind="{ id: `filter_${index}`, value: category, checked: filters.includes(category) }"
						class="mr-2" />
					<label v-if="lang === defaultLang" :for="`filter_${index}`">{{ category }}</label>
					<label v-else :for="`filter_${index}`">{{ (translations && translations[lang]) ?
						translations[lang] : category }}</label>
				</p>
			</fieldset>

			<div class="w-full flex items-center justify-center mb-0 md:mb-5">
				<button ref="filterFormSubmitButton" type="submit"
					class="px-3.5 py-2.5 rounded-md bg-orange-200 hover:bg-red-300 dark:bg-stone-700 dark:hover:bg-red-400">
					{{ translate('shop.filterForm.viewResults') }}
				</button>
			</div>
		</form>
	</aside>

	<div ref="asideOverlay" aria-hidden="true"
		class="z-50 hidden h-full fixed lg:hidden sm:w-1/2 md:w-2/3 sm:left-1/2 md:left-1/3 right-0 top-0 bottom-0 bg-stone-700/50 dark:bg-stone-800/50">
		<!-- Empty div for styling. Not sure if this is the most ideal method. -->
	</div>
</template>
