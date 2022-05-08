module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      cursor:{
        'crosshairEsse':'url(../assets/img/cursor/Crosshair_Gray.cur), pointer ',
      },
      fontFamily:{
        'OxaMed' :['OxaniumMedium','sans-serif'],
        'OxaReg' :['OxaniumRegular','sans-serif'],
      },
      keyframes:{
        rain:{
          '0%':{'background-position' : '0% 0%'},
          '100%':{'background-position' : '0% 1000%'},
        }
      }
    },
    animation:{
      'rain':'rain 5s linear infinite',
    },
    colors: {
      'black': '#000000',
      'whiteInactive': '#988F96',
      'whiteActive': '#D8D6DC',
      'greenInactive': '#378A0C',
      'greenActive': '#48DD00',
      'purpleInactive': '#290831',
      'purpleActive': '#3F2A50',
      'orangeActive':'#C2602F',
      'error': '#DE0D10'
    },

  },
  plugins: [],
}
