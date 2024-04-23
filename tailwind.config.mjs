/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {
			colors: {
			  // Definir colores específicos para el modo oscuro si es necesario
			  dark: {
				primary: '#212121',  
			  },
			  light:{
				primary: '#e8e8e8',
				orangeprimary:"#d9a7c7",
				orangesecondary:"#fffcdc"
			  }
			},
		}, 
	},
	plugins: [],
}
