/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        "back-color": "#212429",
        "button-color": "#33AD9F",
        "buttonhover-color": "#4EFFEA",
        headercolor: "rgba(235, 235, 235, 0.7)",
      },
      width: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "250px": "250px",
        "150px": "150px",
      },
      height: {
        "100px": "100px",
        "200px": "200px",
        "400px": "400px",
        "300px": "300px",
        "250px": "250px",
        "150px": "150px",
      },
      translate: {
        "500-pt": "500%",
        "200-pt": "200%",
        "300-pt": "300%",
        "400-pt": "400%",
        "100-pt": "100%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const filters = {
        ".grayscales": {
          filter: "grayscale(100%)",
        },
        ".blur": {
          filter: "blur(3px)",
        },
        // Add more filter classes as needed
      };

      addUtilities(filters, ["responsive", "hover"]);
    },
  ],
};
