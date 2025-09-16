module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
      extend: {
          colors: {
              navy: "#0B0C2A",
              midnight: "#1A1B3A",
              gold: "#D4AF37",
              softGold: "#E6C87E",
              textLight: "#E0E0E0",
              textMuted: "#B0B0B0",
              glowBlue: "#4A90E2",
              lavender: "#A49CFF",
          },
          fontFamily: {
              lorabold: ['LoraBold', 'serif'],
              lorabolditalics: ['LoraBoldItalic', 'serif'],
              loraitalic: ['LoraItalic', 'serif'],
              loramedium: ['LoraMedium', 'serif'],
              loramediumitalic: ['LoraMediumItalic', 'serif'],
              loraregular: ['LoraRegular', 'serif'],
              lorasemibold: ['LoraSemiBold', 'serif'],
              lorasemibolditalic: ['LoraSemiBoldItalic', 'serif'],
              quattrobold: ['QuattroBold', 'serif'],
              quattroregular: ['QuattroRegular', 'serif'],
          },
      },
  },
  plugins: [],
}

