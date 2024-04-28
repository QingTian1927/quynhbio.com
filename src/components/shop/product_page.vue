<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['product', 'lang']);
const { product } = props;
</script>

<template>
	<div class="w-full min-h-[74.5%] px-8 py-10 flex items-center justify-center">
		<div class="w-full lg:w-4/5 px-3.5 py-2.5 flex flex-col lg:flex-row items-start justify-center">
			<div class="w-full flex items-center justify-center">
				<img v-if="product.media" :src="product.media.thumbnail.src" :alt="product.media.thumbnail.alt" class="w-1/2 rounded-lg mr-8" >

				<div class="self-stretch w-1/2 h-full flex flex-col items-start justify-start">
					<h1 class="font-bold text-5xl text-pretty text-stone-800 dark:text-orange-200">{{ product.name }}</h1>
					<p class="mb-2 italic text-xl text-pretty text-stone-700 dark:text-orange-100/50">{{ product.category }}</p>
					<p class="mb-2 text-3xl font-semibold font-mono text-red-300 dark:text-red-400">{{ product.price }}</p>
				</div>
			</div>
		</div>
	</div>
</template>