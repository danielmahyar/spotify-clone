module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-play-color': {
          DEFAULT: "#181818"
        },
        'spotify-playback-color': {
          DEFAULT: "#B3B3B3"
        },
        'spotify-bg-color': {
          DEFAULT: "#121212"
        },
        'spotify-bg-hover': {
          DEFAULT: "#282828"
        }
      },
    },
  },
  plugins: [],
}
