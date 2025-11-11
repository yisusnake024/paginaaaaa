/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  darkMode: "class", // 🌙 Soporte para modo oscuro
  theme: {
    extend: {
      colors: {
        // 🎨 Paleta institucional CIEF
        primary: {
          DEFAULT: "#2D7A43", // Verde principal
          50: "#F2FAF5",
          100: "#E6F6EA",
          200: "#BFEFCB",
          300: "#99E8AD",
          400: "#4FD774",
          500: "#2D7A43",
          600: "#265F36",
          700: "#1C4226",
          800: "#132A18",
          900: "#0B1209",
        },
        accent: {
          DEFAULT: "#F5A300", // Amarillo institucional
          50: "#FFF7E8",
          100: "#FFF1D1",
          200: "#FFDF99",
          300: "#FFCC61",
          400: "#FFC024",
          500: "#F5A300",
          600: "#C38600",
          700: "#8A5D00",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#12221B",
        },
        muted: {
          DEFAULT: "#E9F0EC",
          dark: "#1B2E22",
        },
        text: {
          DEFAULT: "#12221B", // Oscuro para modo claro
          light: "#FFFFFF",   // Blanco para modo oscuro
        },
      },

      // 🌈 Gradientes y sombras suaves
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #2D7A43 0%, #F5A300 100%)",
        "accent-gradient": "linear-gradient(to right, #2D7A43, #4FD774)",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        card: "0 6px 20px rgba(0,0,0,0.12)",
      },

      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

