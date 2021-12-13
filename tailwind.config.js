module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('public/images/bg-dots.png')",
       },
       colors: {
        'dark-black': '#2c2f34',
        'text-colors': '#00adef',
        'hover': '#08f',
        'light': '#1f2024',
        'darker': '#2c2e32',
        'lighter': '#ffffff1a',
        'light-white': '#ccc',
        'slant-color': '#00adef',
        'hot-color': '#f3502a' 
      }
    },
    container:{
      center: true,
      padding: '2rem'
    },
    image:{
      url: "public/images/bg-dots.png"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
