/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {},
		container: {
			padding: {
				DEFAULT: "30px",
				lg: "0",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
			xxl: "1660px",
			"hover-hover": { raw: "(hover:hover)" },
			"hover-none": { raw: "(hover: none)" },
		},
	},
	plugins: [],
};
