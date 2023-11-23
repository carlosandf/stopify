/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dark: '#121212',
				white: {
					1: '#e9e0e0',
					2: '#a7a7a7'
				}
			}
		},
	},
	plugins: [],
}
