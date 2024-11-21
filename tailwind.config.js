module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Add this if you're using the new Next.js App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Make sure to add your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
