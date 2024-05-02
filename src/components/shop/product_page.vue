<script setup>
import { ref, onMounted } from 'vue';
import { useTranslations } from '../../i18n/utils';

const props = defineProps(['product', 'lang']);
const { product, lang } = props;

const translate = useTranslations(lang);
</script>

<template>
	<div class="w-full min-h-[91.25%] px-8 py-10 flex items-center justify-center">
		<div class="w-full lg:w-4/5 px-3.5 py-2.5 flex flex-col lg:flex-row items-start justify-center">
			<div class="w-full flex flex-col xl:flex-row items-center justify-center">
				<div class="w-full xl:w-1/2 mr-0 mb-8 xl:mr-8 xl:mb-0 rounded-lg">
					<img v-if="product.media" :src="product.media.thumbnail.src" :alt="product.media.thumbnail.alt" class="w-full rounded-lg" >
					<div v-else class="w-full aspect-square lg:aspect-[4/3] xl:aspect-square bg-orange-200 dark:bg-stone-700 rounded-lg flex flex-col items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%"
							class="bi bi-image fill-stone-800/50 dark:fill-orange-200/50" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
							<path
								d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
						</svg>
						<p class="mt-2 text-stone-800/50 dark:text-orange-200/50">{{ translate('image.fallback.text') }}</p>
					</div>
				</div>

				<div class="self-stretch w-full xl:w-1/2 min-h-full flex flex-col items-start justify-start rounded-lg">
					<h1 class="mb-2 font-bold text-5xl text-pretty text-stone-800 dark:text-orange-200">{{ product.name }}</h1>
					<p class="mb-4 italic text-xl text-pretty text-stone-700 dark:text-orange-100/50">{{ product.category }}</p>

					<p class="mb-4 text-3xl">{{ product.price }} {{ translate('currency') }}</p>
					<a href="https://www.facebook.com/myphamquynhbio" class="px-3.5 py-2.5 mb-2 font-semibold rounded-sm text-stone-800 bg-red-300 hover:bg-red-200 dark:bg-red-400 dark:hover:bg-red-300">Liên Hệ Đặt Hàng</a>

					<hr class="w-full my-4 border-stone-700/50 dark:border-orange-200/50">

					<article class="text-pretty">
						<h2 class="mb-2 font-semibold text-3xl text-stone-800 dark:text-orange-200">Miêu Tả</h2>
						<p>
							<slot>Quá trình biểu diễn văn bản gặp lỗi. Tạm thời sử dụng văn bản thuần: <br><br> {{ product.description }}</slot>
						</p>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>