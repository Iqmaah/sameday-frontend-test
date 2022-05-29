module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgImg': "url('~/src/assets/images/bg.png')",
        
     })
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
