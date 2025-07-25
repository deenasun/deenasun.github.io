module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quaternary: "var(--quaternary)",
        quinary: "var(--quinary)",
        'text-primary': "var(--text-primary)",
      },
      fontFamily: {
        'roboto-mono': ['var(--font-roboto-mono)'],
        'tiempos': ['var(--font-tiempos)'],
      },
    },
  },
  plugins: [],
}; 