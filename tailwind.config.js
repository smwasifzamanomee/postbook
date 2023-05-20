module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif', 'ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Oswald'],
        body: ['Open Sans'],
      },
      screens: {
        'sm': {'min': '350px','max': '600px'},
        'md': {'min': '601px', 'max': '820px'},
        'lg': {'min': '821px', 'max': '1249px' },
        'xl': { 'min': '1250px'},
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
