export default {
  target: 'static',
  ssr: true,
  head: {
    title: 'Dimitris Karapanos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "I'm a mid-thirty web developer from Greece living in beautiful Paris. My core programming languages are PHP and Javascript. Currently in love with Laravel and Vue." },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/android-chrome-512x512.png'
      }
    ]
  },
  plugins: [
    '~plugins/format-date.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '~/modules/pdf.js'
  ],
  modules: [
    '@nuxt/content'
  ],
  generate: {
    fallback: true
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    },
    display: 'swap'
  },
  ignore: [process.env.NODE_ENV === 'production' && 'pages/pdf.vue']
}
