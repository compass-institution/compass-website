/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'newyork':['NewYork','serif'],
        'montserrat':['Montserrat','sans-serif']
      },
      colors: {
        'background-grey' : '#f2f2f2',
        'button-grey' : '#F9F9F9',
        'dark-blue' : '#0D1B37',
        'medium-blue' : '#062154',
        'blue-tag-fill' : '#dfebf8',
        'blue-tag-stroke' : '#84b1a4',
        'pink-tag-fill' : '#EFD5EE',
        'pink-tag-stroke' : '#F28EEE',
        'white-tag-fill' : '#FFFFFF',
        'white-tag-stroke' : '#808080'
      },
      letterSpacing: {
        'super-wide' : '.65em'
      },
      spacing: {
        // TODO: CAN REMOVE A LOT OF THESE LATER, JUST HERE FOR DEV PURPOSES
        '128': '32rem', 
        '144': '36rem', 
        '160': '40rem', 
        '176': '44rem', 
        '192': '48rem', 
        '208': '52rem', 
        '224': '56rem', 
        '240': '60rem', 
        '256': '64rem',  // 1024px
        '272': '68rem',  // 1088px
        '288': '72rem',  // 1152px
        '304': '76rem',  // 1216px
        '320': '80rem',  // 1280px
        '336': '84rem',  // 1344px
        '352': '88rem',  // 1408px
        '368': '92rem',  // 1472px
        '384': '96rem',  // 1536px
        '400': '100rem', // 1600px
        '416': '104rem', // 1664px
        '432': '108rem', // 1728px
        '448': '112rem', // 1792px
        '464': '116rem', // 1856px
        '480': '120rem', // 1920px
        '496': '124rem', // 1984px
        '512': '128rem', // 2048px
        '528': '132rem', // 2112px
        '544': '136rem', // 2176px
        '560': '140rem', // 2240px
        '576': '144rem', // 2304px
        '592': '148rem', // 2368px
        '608': '152rem', // 2432px
        '624': '156rem', // 2496px
        '640': '160rem', // 2560px
        '656': '164rem', // 2624px
        '672': '168rem', // 2688px
        '688': '172rem', // 2752px
        '704': '176rem', // 2816px
        '720': '180rem', // 2880px
        '736': '184rem', // 2944px
        '752': '188rem', // 3008px
        '768': '192rem', // 3072px
        '784': '196rem', // 3136px
        '800': '200rem', // 3200px
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
  variants: {
    extend: {
      backdropFilter: ['hover', 'focus'],
      // ...
    },
  },
};
