/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'rui-',
  content: [
    './src/**/*.{tsx,ts}'
  ],
  darkMode: [
    'class', '[data-theme="dark"]'
  ],
  theme: {
    screens: {
      // Ref: https://bux.osu.edu/layout/breakpoints
      'sm': '0',
      'md': '640px',
      'lg': '960px',
      'xl': '1280px',
      'xxl': '1440px',
    },
    spacing: {
      'xxs': 'var(--rui-spacing-xxs)',
      'xs': 'var(--rui-spacing-xs)',
      'sm': 'var(--rui-spacing-sm)',
      'md': 'var(--rui-spacing-md)',
      'lg': 'var(--rui-spacing-lg)',
      'xl': 'var(--rui-spacing-xl)',
      'xxl': 'var(--rui-spacing-xxl)',

      // Ref: https://bux.osu.edu/layout/spacing
      // TODO: Drop these for semantics (sans 0 and 1)
      '0': '0px',
      '1': '1px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '48': '48px',
      '64': '64px',
      '96': '96px',
    },
    colors: {
      // We map Tailwind theme colors to
      // css variables in globals.css.
      // The palette is then autogenerated via makePalette.mjs

      // Brand
      'scarlet': 'var(--rui-scarlet)',
      'gray': 'var(--rui-gray)',

      // Scarlet shades
      'scarlet-dark-40': 'var(--rui-scarlet-dark-40)',
      'scarlet-dark-60': 'var(--rui-scarlet-dark-60)',

      // Gray tints
      'gray-tint-20': 'var(--rui-gray-tint-20)',
      'gray-tint-40': 'var(--rui-gray-tint-40)',
      'gray-tint-60': 'var(--rui-gray-tint-60)',
      'gray-tint-80': 'var(--rui-gray-tint-80)',
      'gray-tint-90': 'var(--rui-gray-tint-90)',

      // Gray shades
      'gray-shade-20': 'var(--rui-gray-shade-20)',
      'gray-shade-40': 'var(--rui-gray-shade-40)',
      'gray-shade-60': 'var(--rui-gray-shade-60)',
      'gray-shade-80': 'var(--rui-gray-shade-80)',

      // Accents
      'blue': 'var(--rui-blue)',
      'blue-contrast': 'var(--rui-blue-contrast)',

      'orange': 'var(--rui-orange)',
      'orange-contrast': 'var(--rui-orange-contrast)',

      'green': 'var(--rui-green)',
      'green-contrast': 'var(--rui-green-contrast)',

      'brown': 'var(--rui-brown)',
      'brown-contrast': 'var(--rui-brown-contrast)',

      'pink': 'var(--rui-pink)',
      'pink-contrast': 'var(--rui-pink-contrast)',

      'violet': 'var(--rui-violet)',
      'violet-contrast': 'var(--rui-violet-contrast)',

      'aqua': 'var(--rui-aqua)',
      'aqua-contrast': 'var(--rui-aqua-contrast)',

      'teal': 'var(--rui-teal)',
      'teal-contrast': 'var(--rui-teal-contrast)',

      'gold': 'var(--rui-gold)',
      'gold-contrast': 'var(--rui-gold-contrast)',

      // Semantic color palettes

      // Neutrals
      'clear': 'rgba(0, 0, 0, 0)',
      'white': 'var(--rui-white)',
      'black': 'var(--rui-black)',
      'focus': 'var(--rui-focus)',

      'primary': 'var(--rui-primary)',
      'primary-contrast': 'var(--rui-primary-contrast)',
      'primary-tint': 'var(--rui-primary-tint)',
      'primary-shade': 'var(--rui-primary-shade)',

      'secondary': 'var(--rui-secondary)',
      'secondary-contrast': 'var(--rui-secondary-contrast)',
      'secondary-tint': 'var(--rui-secondary-tint)',
      'secondary-shade': 'var(--rui-secondary-shade)',

      'tertiary': 'var(--rui-tertiary)',
      'tertiary-contrast': 'var(--rui-tertiary-contrast)',
      'tertiary-tint': 'var(--rui-tertiary-tint)',
      'tertiary-shade': 'var(--rui-tertiary-shade)',

      'light': 'var(--rui-light)',
      'light-contrast': 'var(--rui-light-contrast)',
      'light-tint': 'var(--rui-light-tint)',
      'light-shade': 'var(--rui-light-shade)',

      'dimmed': 'var(--rui-dimmed)',
      'dimmed-contrast': 'var(--rui-dimmed-contrast)',
      'dimmed-tint': 'var(--rui-dimmed-tint)',
      'dimmed-shade': 'var(--rui-dimmed-shade)',

      'dark': 'var(--rui-dark)',
      'dark-contrast': 'var(--rui-dark-contrast)',
      'dark-tint': 'var(--rui-dark-tint)',
      'dark-shade': 'var(--rui-dark-shade)',

      'info': 'var(--rui-info)',
      'info-contrast': 'var(--rui-info-contrast)',
      'info-tint': 'var(--rui-info-tint)',
      'info-shade': 'var(--rui-info-shade)',

      'success': 'var(--rui-success)',
      'success-contrast': 'var(--rui-success-contrast)',
      'success-tint': 'var(--rui-success-tint)',
      'success-shade': 'var(--rui-success-shade)',

      'warning': 'var(--rui-warning)',
      'warning-contrast': 'var(--rui-warning-contrast)',
      'warning-tint': 'var(--rui-warning-tint)',
      'warning-shade': 'var(--rui-warning-shade)',

      'error': 'var(--rui-error)',
      'error-contrast': 'var(--rui-error-contrast)',
      'error-tint': 'var(--rui-error-tint)',
      'error-shade': 'var(--rui-error-shade)',

      'link': 'var(--rui-link)',
      'link-tint': 'var(--rui-link-tint)',

      'visited': 'var(--rui-visited)',
      'visited-tint': 'var(--rui-visited-tint)',

      // 'neutral-0': 'var(--rui-neutral-0)',
      // 'neutral-20': 'var(--rui-neutral-20)',
      // 'neutral-40': 'var(--rui-neutral-40)',
      // 'neutral-60': 'var(--rui-neutral-60)',
      // 'neutral-80': 'var(--rui-neutral-80)',
      // 'neutral-90': 'var(--rui-neutral-90)',
      // 'neutral-100': 'var(--rui-neutral-100)',
    },
    // Ref: https://bux.osu.edu/typography/type-size
    fontSize: {
      xs: ['var(--rui-text-xs)', { lineHeight: '1.5' }],
      sm: ['var(--rui-text-sm)', { lineHeight: '1.5' }],
      md: ['var(--rui-text-md)', { lineHeight: '1.5' }],
      base: ['var(--rui-text-base)', { lineHeight: '1.5' }],
      lg: ['var(--rui-text-lg)', { lineHeight: '1.5' }],
      xl: ['var(--rui-text-xl)', { lineHeight: '1.5' }],
      xxl: ['var(--rui-text-xxl)', { lineHeight: '1.5' }],
      // TODO: Line heights. Did I get them from BUX SASS?

      // Headings use different font steps
      // Ref: https://bux.osu.edu/typography/headings
      h1: ['var(--rui-heading-1)', { lineHeight: '1.2'}],
      h2: ['var(--rui-heading-2)', { lineHeight: '1.25'}],
      h3: ['var(--rui-heading-3)', { lineHeight: '1.25'}],
      h4: ['var(--rui-heading-4)', { lineHeight: '1.25'}],
    },
    // Ref: https://bux.osu.edu/typography/fonts
    fontFamily: {
      serif: ['BuckeyeSerif', 'Georgia', 'sans-serif'],
      sans: ['BuckeyeSans', 'HelveticaNeue', 'Helvetica', 'Arial', 'serif'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
    fontWeight: {
      normal: 'var(--rui-font-normal)',
      semibold: 'var(--rui-font-semibold)',
      bold: 'var(--rui-font-bold)',
      extrabold: 'var(--rui-font-extrabold)',
      black: 'var(--rui-font-black)',
    },
    extend: {
      minWidth: {
        // Tailwind doesn't come with spacing breakpoint min-width values
        'xxs': 'var(--rui-spacing-xxs)',
        'xs': 'var(--rui-spacing-xs)',
        'sm': 'var(--rui-spacing-sm)',
        'md': 'var(--rui-spacing-md)',
        'lg': 'var(--rui-spacing-lg)',
        'xl': 'var(--rui-spacing-xl)',
        'xxl': 'var(--rui-spacing-xxl)',
      },
      boxShadow: {
        // It's typical that we use a thick line under certain
        // content that match either the primary color or some
        // dark variant.
        // TODO: Make these a standard token for underline
        // styling on interactive components
        'underline-primary': '0 4px 0 0 var(--rui-primary)',
        'underline-dark': '0 4px 0 0 var(--rui-dark)',
      },
      transitionTimingFunction: {
        'decelerate-max': 'transform 300ms cubic-bezier(0, 0, 0, 1)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'pop': {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'ping': {
          '75%, 100%': {
            // Reduce Tailwind's default ping transform
            transform: 'scale(1.5)',
            opacity: '0',
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'pop': 'pop 0.12s ease-in-out',
      }
    },
  },
  safelist: [
    // I expose a number of props for controlling the box model via specific spacing units.
    // But to support this, we have to interpolate class names. To ensure each variant is
    // compiled into the final .css build we create a whitelist of all patterns we support.

    // Note that I do *not* include responsive prefixes (sm:, md:, etc) because classes
    // are dynamically added/removed when a developer uses a responsive form of
    // one of the box model props. This may change in the future based on benchmarks.

    // Unminified benchmarks:
    // 30 KB without the whitelist (so far...)
    // 43 KB without ^$ (will match scroll-m-md and so forth that we don't need)
    // 35 KB with ^$ (25 KB minified)

    // (m)argin, (p)adding
    // Examples: px-sm, p-2xl, m-xs, -m-xs
    { pattern: /^-?rui-(m|p)(x|y|l|r|t|b)?-(xxs|xs|sm|md|lg|xl|xxl|0|1|auto|px)$/ }, // +6 KB

    // // inset
    // // Examples: inset-full, -inset-x-md, inset-y-full
    { pattern: /^-?rui-(inset)(x|y)?-(xxs|xs|sm|md|lg|xl|xxl|xxxl|full|auto|px)$/ }, // +2 KB

    // // top/left/bottom/right
    // // Examples: top-xs, -right-sm, right-auto
    { pattern: /^-?rui-(top|left|bottom|right)(x|y)?-(xxs|xs|sm|md|lg|xl|xxl|xxxl|full|auto)$/ }, // +2 KB

    // // TODO: Space between? It's heavy CSS

    // // fz(fontSize)
    { pattern: /^rui-text-(xs|sm|md|lg|xl|xxl|0|full)$/ }, // +1 KB

    // +1 KB
    // (h)eight, (w)idth, (miw)in width, (maw)x idth, (mih)in height, (mah)x height,
    // Examples: max-h-screen, min-h-0, max-w-sm, w-full, h-2xl
    // Note that tailwind only define min-h 0, full, screen.
    { pattern: /^rui-(max|min)?-(h|w)-(xs|sm|md|lg|xl|xxl|xxxl|0|1|full|screen)$/ }, // +1 KB
  ],
}
