module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
        'serif': ['Fraunces', 'serf'],
      },
      fontFamily: { 
        sm: ['10px', '15px'],
        base: ['14px', '20px'],
      },
      colors: {
        'cream': 'hsl(30, 38%, 92%)',
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'dark-gray': 'hsl(228, 12%, 48%)',
        'dark-blue': 'hsl(212, 21%, 14%)'
      }
    },
  },
  plugins: [], 
}
