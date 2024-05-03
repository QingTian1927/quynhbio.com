<script setup>
import { ref, onMounted } from 'vue';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { useTranslations } from '../../i18n/utils';

const props = defineProps(["lang", "productPage", "formMethod"]);
const { firstPage, previousPage, currentPage, nextPage, lastPage } = props.productPage;

const { lang, formMethod } = props;
const translate = useTranslations(lang);
</script>

<template>
	<nav class="w-full px-3.5 flex items-center justify-center">
		<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, firstPage, { prependWith: 'shop' })"
			:class="{ invisible: !previousPage || currentPage === firstPage }"
			class="order-first self-stretch aspect-square mr-2 flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
				class="bi bi-skip-backward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
				<title>{{ translate('shop.pageNav.first') }}</title>
				<path
					d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5" />
			</svg>
		</a>
		<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, previousPage, { prependWith: 'shop' })"
			:class="{ invisible: !previousPage }"
			class="order-2 self-stretch aspect-square mr-2 flex items-center justify-center">
			<title>{{ translate('shop.pageNav.prev') }}</title>
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
				class="bi bi-skip-start-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
				<path
					d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z" />
			</svg>
		</a>
		<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, nextPage, { prependWith: 'shop' })"
			:class="{ invisible: !nextPage }"
			class="order-4 self-stretch aspect-square ml-2 flex items-center justify-center">
			<title>{{ translate('shop.pageNav.next') }}</title>
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
				class="bi bi-skip-end-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
				<path
					d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z" />
			</svg>
		</a>
		<a v-if="formMethod === 'GET'" :href="getRelativeLocaleUrl(lang, lastPage, { prependWith: 'shop' })"
			:class="{ invisible: !nextPage || currentPage === lastPage }"
			class="order-last self-stretch aspect-square ml-2 flex items-center justify-center">
			<title>{{ translate('shop.pageNav.last') }}</title>
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
				class="bi bi-skip-forward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
				<path
					d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5" />
			</svg>
		</a>

		<button ref="firstPageButton" v-if="formMethod === 'POST'"
			:class="{ invisible: !previousPage || currentPage === firstPage }"
			class="order-first self-stretch aspect-square mr-2 flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
				class="bi bi-skip-backward-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
				<path
					d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5" />
			</svg>
		</button>
		<button ref="prevPageButton" v-if="formMethod === 'POST'" :class="{ invisible: !previousPage }"
			class="order-2 self-stretch aspect-square mr-2 flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
				class="bi bi-skip-start-fill fill-stone-800 dark:fill-orange-100" viewBox="0 0 16 16">
				<path
					d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z" />
			</svg>
		</button>
		<button ref="nextPageButton" v-if="formMethod === 'POST'" :class="{ invisible: !nextPage }"
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
</template>