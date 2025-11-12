/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", ""],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
}