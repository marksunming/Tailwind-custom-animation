module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.3s infinite",
        wiggle: "wiggle 1s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "scale(1.2) rotate(7deg)",
          },
          "50%": {
            transform: "scale(0.8) rotate(-7deg)",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
