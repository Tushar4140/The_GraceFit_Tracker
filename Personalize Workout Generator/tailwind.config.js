/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		colors: {
		  primary: {
			main: "#fbbf24",
			light: "#fde68a",
			dark: "#dea123",
			contrastText: "#1f2937",
		  },
		  secondary: {
			main: "#34d399",
			light: "#6ee7b7",
			dark: "#10b981",
			contrastText: "#1f2937",
		  },
		  background: {
			gym: "#1a202c", // Dark background for a gym theme
			gradient: "linear-gradient(45deg, #232526, #414345);", // Subtle gradient background
		  },
		  accent: "#ff5722", // Vibrant orange accent color
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		fontFamily: {
		  sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'], // Updated font to Poppins
		},
		boxShadow: {
		  'glow': '0 0 20px rgba(255, 165, 0, 0.5)', // Orange glow effect
		  'subtle': '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle box shadow for elements
		  'hover': '0 8px 16px rgba(0, 0, 0, 0.2)', // Box shadow on hover
		},
		letterSpacing: {
		  'widest': '.15em', // Wider letter spacing for headings
		},
		animation: {
		  'fadeIn': 'fadeIn 0.5s ease-in-out', // Custom fade-in animation
		  'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Subtle pulsating animation
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		  pulse: {
			'0%, 100%': { transform: 'scale(1)' },
			'50%': { transform: 'scale(1.05)' },
		  },
		},
	  },
	},
	plugins: [
	  // Add any additional plugins here
	],
  };
  