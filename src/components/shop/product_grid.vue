<script setup>
	import { ref } from 'vue';
	import { db, Product, asc } from 'astro:db';

	const products = await db.select().from(Product).orderBy(asc(Product.name));
</script>

<template>
	<div class="w-full flex items-center justify-center">
		<div class="w-full lg:w-4/5 px-8 py-10 flex items-start justify-center">
			<aside class="w-[22.5%] px-3.5 py-2.5 text-left sticky top-0">
				<h2 class="font-bold text-2xl">Bộ Lọc</h2>
				<hr class="border-stone-800 dark:border-orange-100 my-5 px-3.5">

				<form method="POST">
					<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
						<legend class="text-lg font-semibold mb-1">Thứ tự sắp xếp sản phẩm</legend>

						<p>
							<input type="radio" name="order_name_asc" id="order_name_asc" class="mr-2" checked />
							<label for="order_name_asc">A-Z</label>
						</p>

						<p>
							<input type="radio" name="order_name_desc" id="order_name_desc" class="mr-2" />
							<label for="order_name_desc">Z-A</label>
						</p>

						<p>
							<input type="radio" name="order_price_asc" id="order_price_asc" class="mr-2" />
							<label for="order_price_asc">Giá: tăng dần</label>
						</p>

						<p>
							<input type="radio" name="order_price_desc" id="order_price_desc" class="mr-2" />
							<label for="order_price_desc">Giá: giảm dần</label>
						</p>
					</fieldset>

					<hr class="border-stone-800 dark:border-orange-100 my-5 px-3.5">

					<fieldset class="accent-red-400 dark:accent-red-400 mb-5">
						<legend class="text-lg font-semibold mb-1">Mặt hàng</legend>

						<p>
							<input type="checkbox" name="filter_1" id="filter_1" class="mr-2" />
							<label for="filter_1">Filter 1</label>
						</p>

						<p>
							<input type="checkbox" name="filter_2" id="filter_2" class="mr-2" />
							<label for="filter_2">Filter 2</label>
						</p>

						<p>
							<input type="checkbox" name="filter_3" id="filter_3" class="mr-2" />
							<label for="filter_3">Filter 3</label>
						</p>

						<p>
							<input type="checkbox" name="filter_4" id="filter_4" class="mr-2" />
							<label for="filter_4">Filter 4</label>
						</p>
					</fieldset>

					<div class="w-full flex items-center justify-center mb-5">
						<button type="submit" class="px-3.5 py-2.5 rounded-md bg-orange-200 hover:bg-red-300 dark:bg-stone-700 dark:hover:bg-red-400">Xem kết quả</button>
					</div>
				</form>
			</aside>

			<section class="w-[77.5%] px-3.5 py-2.5">
				<h2 class="font-bold text-2xl mb-5">Sản Phẩm</h2>

				<div class="w-full grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
					<div v-for="product of products" class="w-full aspect-[4/5] flex flex-col items-center justify-between rounded-lg bg-orange-200 dark:bg-stone-700">
						<div class="w-full aspect-square flex items-center justify-center bg-orange-300 dark:bg-stone-900 rounded-t-lg">
							<svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" class="bi bi-image fill-stone-700 dark:fill-orange-200" viewBox="0 0 16 16">
								<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
								<path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
							</svg>
						</div>

						<div class="grow w-full px-3.5 py-2.5 flex items-center justify-between">
							<p class="grow text-ellipsis">{{ product.name }}</p>
							<p class="shrink-0 ml-2">{{ product.price }}</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
