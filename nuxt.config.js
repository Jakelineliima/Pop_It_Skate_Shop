const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],

    metaInfo: {
     
      meta: [
        
        // OpenGraph data (Most widely used)
        {property: 'og:title', content: 'Inicio | Pop-It Skate Shop'},
        {property: 'og:site_name', content: 'Pop-It'},
        // The list of types is available here: http://ogp.me/#types
        {property: 'og:type', content: 'website'},
        // Should the the same as your canonical link, see below.
        {property: 'og:url', content: 'http://localhost:3000/'},
        {property: 'og:image', content: 'http://localhost:3000/logo.svg',},
        // Often the same as your meta description, but not always.
        {property: 'og:description', content: 'Seja bem vindo na Pop-It Skate Shop'},
    
        // Facebook card
        {name: 'facebook:card', content: 'summary'},
        {name: 'facebook:site', content: 'http://localhost:3000/'},
        {name: 'facebook:title', content: 'Inicio | Pop-It Skate Shop'},
        {name: 'facebook:description', content: 'Seja bem vindo a Pop-It Skate Shop'},
       
        
        // Instagram card
        {name: 'instagram:card', content: 'summary'},
        {name: 'instagram:site', content: 'http://localhost:3000/'},
        {name: 'instagram:title', content: 'Inicio | Pop-It Skate Shop'},
        {name: 'instagram:description', content: 'Seja bem vindo a Pop-It Skate Shop'},
    
     
        // whatsapp card
        {name: 'whatsapp:card', content: 'summary'},
        {name: 'whatsapp:site', content: 'http://localhost:3000/'},
        {name: 'whatsapp:title', content: 'Inicio | Pop-It Skate Shop'},
        {name: 'whatsapp:description', content: 'Seja bem vindo a Pop-It Skate Shop'},
      
    
      ]
    }

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-ls.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
