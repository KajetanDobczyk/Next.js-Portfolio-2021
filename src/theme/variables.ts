import { Font, Color } from './interfaces'

export const color: Color = {
  black: '#000000',
  white: '#ffffff',
  grey: {
    100: '#222222',
    300: '#555555',
    600: '#999999',
    800: '#d8d8d8',
    900: '#f5f5f5',
  },
  text: '#222222',
  main: '#d0021b',
  blue: '#021bd0',
  green: '#1bd002',
}

export const font: Font = {
  size: {
    xxs: '0.6rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.25rem',
    xl: '1.375rem',
    xxl: '1.5rem',
    xxxl: '1.625rem',
  },
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
  family: {
    sans: 'Alegreya Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    serif: 'Alegreya',
  },
}

const mediaQ = (size: number): string =>
  `@media only screen and (max-width: ${size}px)`

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const breakpoints: Record<Breakpoint, number> = {
  xs: 380,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
}

export const media = Object.keys(breakpoints).reduce(
  (acc, breakpoint) => ({
    ...acc,
    [breakpoint]: mediaQ(breakpoints[breakpoint as Breakpoint]),
  }),
  {} as Record<Breakpoint, string>,
)

export const dimensions = {
  header: {
    big: '90px',
    medium: '80px',
    small: '60px',
  },
}
