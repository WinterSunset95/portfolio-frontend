



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite'
			},
			scale: {
				'200': '2'
			}
		},
  },
  plugins: [],
}
