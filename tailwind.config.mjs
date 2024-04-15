/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'3xs': '360px',
			'2xs': '400px',
			'xs': '475px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
}
