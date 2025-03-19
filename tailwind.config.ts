/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./index.html",
      // "./src/**/*.{js,ts,jsx,tsx}",

      "./src/**/*.{js,ts,jsx,tsx}", // Make sure this matches your project structure
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
        width: {
          '96': '96%', // Custom definition
        },
    		colors: {},


    

        animation: {
          "scale-in": "scale-in 0.2s ease-out",
          "scale-out": "scale-out 0.2s ease-in",
        },

        keyframes: {
          "scale-in": {
            "0%": { opacity: 0, transform: "scale(0.9)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
          "scale-out": {
            "0%": { opacity: 1, transform: "scale(1)" },
            "100%": { opacity: 0, transform: "scale(0.9)" },
          },
        },


        

    	}
    },
    // plugins: [require("tailwindcss-animate")],
    plugins: [
      require("@tailwindcss/forms"), // For form elements like <select>, <input>, etc.
      require("tailwindcss-animate"), // For animations (used in ShadCN components)
    ],
  };