module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       colors: {
        'dark-black': '#2c2f34',
        'text-colors': '#00adef',
        'hover': '#08f',
        'light': '#1f2024',
        'darker': '#2c2e32',
        'lighter': '#ffffff1a',
        'light-white': '#ccc',
        'slant-color': '#00adef',
        'hot-color': '#f3502a',
        'you-tube': '#FF0000',
        'vimeo' : '  #86c9ef',
        'spotify': '#1DB954',
        'snapchat': '#fffc00',
        'twitch': '#6441a5',
        'soundcloud': '#ff8800',
        'video-bg': '#ffffff0d',
        'border-color': '#0000000d',
        'background':'#1a1b1f',
        'bg-color':'#17171a',
        'twitter': '#00acee',
        'instagram': '#C13584',
        'instagram-hover': '#E1306C',
        'youtube': '#c4302b',
        'youtube-subscribe': '#e62117',
        'youtube-hover': '#9b2622',
        'facebook': '#3b5998',
        'border-test': '#aca6a6',
        'footer': '#161619',
        'dark-white': '#ffffff1a',
        'dark-background': '#0000001a',
        'dim-white': '#ffffff33'
      },
      screens: {
        'xl': '1200px',
        'lg': '1000px',
        'md': '768px'
        // => @media (min-width: 1200px) { ... }
      },
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
