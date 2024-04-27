<script setup>
import { ref, onMounted } from 'vue';

const imagePicker = ref(null);
const chosenFileLabel = ref(null);
const outputTextArea = ref(null);
const copyClipboardButton = ref(null);
const downloadButton = ref(null);

const noImageText = 'No image selected. Select one by clicking here or by using the "Browse" button.'
const selectedImage = ref(undefined);
const selectedImageName = ref("");

function fallbackCopyToClipboard() {
	return "lmao";
}

function copyToClipboard(text) {
	if (!navigator.clipboard) {
		fallbackCopyToClipboard();
		return;
	}

	navigator.clipboard.writeText(text).then(() => {
		alert("Successfully copied Data URL into the clipboard.");
	}, (err) => {
		alert("Failed to copy Data URL into the clipboard.");
		console.log("Async: navigator.clipboard.writeText() failed: ", err);
	})
}

function updateDownloadButton(fileName, text) {
	if (!fileName || !text) {
		downloadButton.value.setAttribute("href", "javascript:void(0)");
		downloadButton.value.setAttribute("download", "");
		return;
	}

	const downloadFileName = `${fileName}_DataUrl.txt`;
	const textBlob = new Blob([text], { type: 'text/plain' });

	downloadButton.value.setAttribute("href", window.URL.createObjectURL(textBlob));
	downloadButton.value.setAttribute("download", downloadFileName);

	console.log(encodeURIComponent(text));
	console.log(text);
}

onMounted(() => {
	imagePicker.value.addEventListener("change", (e) => {
		const file = imagePicker.value.files[0];
		const reader = new FileReader();

		reader.addEventListener("load", () => {
			selectedImage.value = reader.result;
			updateDownloadButton(file.name, reader.result);
			outputTextArea.value.value = reader.result;
		}, false);

		if (file) {
			selectedImageName.value = file.name;
			chosenFileLabel.value.innerHTML = file.name;
			reader.readAsDataURL(file);
		} else {
			selectedImageName.value = "";
			selectedImage.value = undefined;
			chosenFileLabel.value.innerHTML = noImageText;
			updateDownloadButton("", "");
		}
	})

	copyClipboardButton.value.addEventListener("click", (e) => {
		const file = imagePicker.value.files[0];

		if (!file || !selectedImage.value) {
			alert("No image selected. Please select an image first.");
			return;
		}
		copyToClipboard(selectedImage.value);
	})

	downloadButton.value.addEventListener("click", (e) => {
		const file = imagePicker.value.files[0];

		if (!file || !selectedImage.value) {
			alert("No image selected. Please select an image first.");
			return;
		}
	})
});
</script>

<template>
	<div class="w-full flex items-center justify-center">
		<div class="w-full lg:w-4/5 px-8 py-10 flex flex-col items-center justify-center">
			<h2 class="px-3.5 mb-2.5 self-start font-bold text-xl">Choose an image</h2>
			<div class="w-full px-3.5 py-2.5 flex items-center justify-between">
				<label ref="chosenFileLabel" for="imagePicker"
					class="grow px-3.5 py-2.5 mr-2.5 line-clamp-2 text-ellipsis overflow-hidden rounded-md dark:bg-stone-700 dark:text-orange-100/50 cursor-pointer">
					{{ noImageText }}
				</label>

				<label for="imagePicker"
					class="self-stretch px-3.5 py-2.5 flex items-center justify-center font-semibold rounded-md dark:bg-stone-700 hover:bg-red-300 dark:hover:text-stone-800 dark:hover:bg-red-400 cursor-pointer">Browse</label>
				<input ref="imagePicker" type="file" accept="image/*" id="imagePicker" name="imagePicker"
					class="hidden" />
			</div>

			<div class="w-full px-3.5">
				<hr class="w-full border-stone-700 my-5">
			</div>

			<h2 class="px-3.5 mb-2.5 self-start font-bold text-xl">Image preview</h2>
			<div class="w-full aspect-[2/1] mb-5 px-3.5 py-2.5 flex items-center justify-center">
				<div class="w-full h-full p-3.5 rounded-md flex flex-col items-center justify-center dark:bg-stone-700">
					<div class="w-full h-full flex flex-col items-center justify-center"
						:class="{ hidden: selectedImage }">
						<svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%"
							class="bi bi-image dark:fill-orange-100/50" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
							<path
								d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
						</svg>
						<p class="mt-2 dark:text-orange-100/50">No image selected</p>
					</div>

					<div class="w-full h-full flex flex-col items-center justify-center"
						:class="{ hidden: !selectedImage }">
						<img :src="selectedImage" :alt="(selectedImage) ? selectedImageName : 'No image selected'">
					</div>
				</div>
			</div>

			<h2 class="px-3.5 mb-2.5 self-start font-bold text-xl">Data URL contents</h2>
			<div class="w-full px-3.5 mb-5 flex items-center justify-center">
				<textarea ref="outputTextArea" name="outputTextArea" readonly
					class="w-full min-h-64 p-3.5 rounded-md text-xs font-mono dark:bg-stone-700 dark:text-orange-100 dark:placeholder:text-orange-100/50"
					placeholder="No image selected. Select one by using the file picker above."></textarea>
			</div>

			<div class="w-full px-3.5 flex items-center justify-center">
				<button ref="copyClipboardButton"
					class="self-stretch px-3.5 py-2.5 mr-2.5 font-semibold rounded-md dark:bg-stone-700 dark:hover:bg-red-400 dark:hover:text-stone-800">
					Copy to clipboard
				</button>

				<a ref="downloadButton"
					class="self-stretch cursor-pointer px-3.5 py-2.5 font-semibold rounded-md dark:bg-stone-700 dark:hover:bg-red-400 dark:hover:text-stone-800">
					Download as text file
				</a>
			</div>
		</div>
	</div>
</template>
