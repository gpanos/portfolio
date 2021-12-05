const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      typography: theme => ({
        default: {
          css: {
            a: {
              color: theme('colors.gray.500')
            },
            h2: {
              paddingBottom: theme('padding.2'),
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.200')
            },
            h3: {
              paddingBottom: theme('padding.2'),
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray.200')
            },
            blockquote: {
              fontWeight: '400',
              color: theme('colors.gray.600'),
              fontStyle: 'normal',
              quotes: '"\\201C""\\201D""\\2018""\\2019"'
            },
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            },
            code: {
              fontWeight: '400',
              backgroundColor: theme('colors.gray.100'),
              padding: theme('padding.1'),
              borderWidth: 1,
              borderColor: theme('colors.gray.200'),
              borderRadius: theme('borderRadius.default')
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            'h3 code': {
              fontWeight: '600'
            },
            'pre code': {
              fontFamily: 'JetBrainsMono'
            },
            'a code': {
              color: theme('colors.gray.500')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.300')
            },
            a: {
              color: theme('colors.gray.500')
            },
            strong: {
              color: theme('colors.gray.100')
            },
            'ol > li::before': {
              color: theme('colors.gray.400')
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600')
            },
            hr: {
              borderColor: theme('colors.gray.700')
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700')
            },
            h1: {
              color: theme('colors.gray.100')
            },
            h2: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.800')
            },
            h3: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.800')
            },
            h4: {
              color: theme('colors.gray.100')
            },
            'figure figcaption': {
              color: theme('colors.gray.400')
            },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
              borderWidth: 0
            },
            'a code': {
              color: theme('colors.gray.500')
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: { typography: ['dark'] }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-break')()
  ]
}
