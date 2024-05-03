<script setup>
import { ref, onMounted } from 'vue';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { getLinkForm } from '../../scripts/routingUtils.ts'
import { useTranslations } from '../../i18n/utils.ts';

const props = defineProps(["lang", "products"]);
const { lang, products } = props;
const translate = useTranslations(lang);
</script>

<template>
	<section class="w-full lg:w-[77.5%] px-3.5 py-2.5">
		<h2 ref="productGridLabel" class="font-bold text-2xl mb-5">{{ translate('shop.productGrid.title') }}</h2>

		<div
			class="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
			<a v-for="product of products"
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

						<p class="mt-1 text-xs xs:text-base text-stone-800/50 dark:text-orange-200/50 text-center">
							{{ translate('image.fallback.text') }}</p>
					</div>

					<img v-else :src="product.media.thumbnail.src" :alt="product.media.thumbnail.alt" loading="lazy"
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
</template>
