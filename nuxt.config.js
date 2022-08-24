export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Collège Père Augustin Planque',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css'
  ],
  tailwindcss: {cssPath: '~/assets/styles/main.css',    configPath: 'tailwind.config.js' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity/module', 
    '@nuxtjs/style-resources', 
    '@nuxtjs/fontawesome', 
    'nuxt-webfontloader'

  ],

  sanity : {
    projectId: "b0ckc99w"
  }, 

  loading: {
    color: '#bb1e32', 
    heigth: "4px"
  }, 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],
  webfontloader: {
    google: {
      families: ['Poppins:400,700, 900', 'Raleway:400, 700, 900', 'Lato:400'] 
    }
  },
  styleResources: {
    scss: [
      './assets/styles/vars/*.scss',
      './assets/styles/abstracts/_mixins.scss' 
      ]
  }, 

  tailwindcss: {
    exposeConfig: true
  }, 
 
  fontawesome:  {
    icons: {
      solid: ['faHome'],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
