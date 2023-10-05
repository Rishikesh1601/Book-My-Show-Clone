/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bms: 
        {
          50: '#edf0fd',
          100: '#ced3e5',
          200: '#afb6cf',
          300: '#9099bb',
          400: '#707ba7',
          500: '#57628e',
          600: '#444c6f',
          700: '#303650',
          800: '#1c2132',
          900: '#080b17',
        }
      },
      backgroundImage: {
          'bgImage':"url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg')"
      },
    },
  },
  plugins: [],
}

