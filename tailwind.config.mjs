/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				quynhbio: {
					css: {
						'--tw-prose-body': theme('colors.stone[800]'),
						'--tw-prose-headings': theme('colors.stone[900]'),
						'--tw-prose-lead': theme('colors.stone[900]'),
						'--tw-prose-links': theme('colors.red[400]'),
						'--tw-prose-bold': theme('colors.stone[900]'),
						'--tw-prose-counters': theme('colors.stone[900]'),
						'--tw-prose-bullets': theme('colors.stone[900]'),
						'--tw-prose-hr': theme('colors.stone[900]'),
						'--tw-prose-quotes': theme('colors.stone[800]'),
						'--tw-prose-quote-borders': theme('colors.red[300]'),
						'--tw-prose-captions': theme('colors.stone[800]'),
						'--tw-prose-code': theme('colors.red[400]'),
						'--tw-prose-pre-code': theme('colors.orange[100]'),
						'--tw-prose-pre-bg': theme('colors.stone[800]'),
						'--tw-prose-th-borders': theme('colors.stone[800]'),
						'--tw-prose-td-borders': theme('colors.stone[500]'),

						'--tw-prose-invert-body': theme('colors.orange[100]'),
						'--tw-prose-invert-headings': theme('colors.orange[200]'),
						'--tw-prose-invert-lead': theme('colors.orange[200]'),
						'--tw-prose-invert-links': theme('colors.red[300]'),
						'--tw-prose-invert-bold': theme('colors.orange[200]'),
						'--tw-prose-invert-counters': theme('colors.orange[200]'),
						'--tw-prose-invert-bullets': theme('colors.orange[200]'),
						'--tw-prose-invert-hr': theme('colors.orange[200]'),
						'--tw-prose-invert-quotes': theme('colors.orange[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.red[300]'),
						'--tw-prose-invert-captions': theme('colors.orange[100]'),
						'--tw-prose-invert-code': theme('colors.red[300]'),
						'--tw-prose-invert-pre-code': theme('colors.orange[100]'),
						'--tw-prose-invert-pre-bg': theme('colors.stone[700]'),
						'--tw-prose-invert-th-borders': theme('colors.orange[200]'),
						'--tw-prose-invert-td-borders': theme('colors.orange[100]'),
					},
				},
			}),
		},
		screens: {
			'3xs': '360px',
			'2xs': '400px',
			'xs': '475px',
			...defaultTheme.screens,
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
