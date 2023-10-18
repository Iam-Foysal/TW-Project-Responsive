tailwind.config = {
    theme: {
      extend: {
        colors: {
          navbg:"#0D0D0D",
          primary: "#FFD2A4",
          boxbg: "#FFF5EB",
          grey: "#F5F2F0",
          
        },
        maxWidth: {
            "container": "1280px",
        },
        fontFamily: {
          RobotoCondensed:'Roboto Condensed, sans-serif',
        },
        backgroundImage: {
          'banner1':"url('images/pic.jpg')",
          'banner': "url('images/banner.jpg')",
          overlay:"linear-gradient(40deg, #060606 16.68%, rgba(1, 1, 1, 0.13) 87.67%, rgba(0, 0, 0, 0.02) 96.44%);",
          textgrey:"linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);",
          bgback:"url('./images/back.jpg')",
        },
      }
    }
  }