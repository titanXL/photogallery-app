const {resolve} = require('path')

const routerBase = {
  router: {
    base: '/photogallery-app/'
  }
}

module.exports = {
  ...routerBase,
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'photogallery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/font-awesome',
    ['nuxt-sass-resources-loader', [
      resolve(__dirname, 'assets/scss/main.scss'),
    ]]
  ],
  /**
   * Global css files
   */
  css: [
    {src: '@/assets/scss/main.scss', lang: 'scss'}
  ],
  /**
   * plugins
   */
  plugins: [
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/hamburger'}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

}
