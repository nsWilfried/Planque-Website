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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      {rel: "stylesheet", href: "https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css"}
    ], 
    script: [ {
        src: 'https://unpkg.com/flowbite@1.5.2/dist/flowbite.js', 
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.css', 
  ],
  tailwindcss: {cssPath: '~/assets/styles/main.css',    configPath: 'tailwind.config.js' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate.js"
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
    'nuxt-webfontloader', 
    '@nuxtjs/moment',


  ],

  // momentjs config
  moment: {
    locales: ['fr']
  }, 

  // sanity config
  sanity : {
    projectId: "b0ckc99w"
  }, 

  // loading bar config
  loading: {
    color: '#bb1e32', 
    heigth: "4px"
  }, 

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'i.e370d310da4-fe8bb7+1@inbox.mailtrap.io',
      },
      smtp: {
        host: "smtp.mailtrap.io",
        port: 2525,
          auth: {
            user: "47b6f685efaae4",
            pass: "f536a1be47b9e4"
        }
      },
  
    }],
  ],

  // web fonts config
  webfontloader: {
    google: {
      families: ['Poppins:400,700, 900', 'Raleway:400, 700, 900', 'Lato:400'] 
    }
  },

  // styles config 
  styleResources: {
    scss: [
      './assets/styles/vars/*.scss',
      './assets/styles/abstracts/_mixins.scss' 
      ]
  }, 

  // tailwindcss config
  tailwindcss: {
    exposeConfig: true
  }, 
 
  // fontawesome config
  fontawesome:  {
    icons: {
      solid: true, 
      brands: true, 
    }
  },

  // router config
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  }, 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate"]
  }
}
