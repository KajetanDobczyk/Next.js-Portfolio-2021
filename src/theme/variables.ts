import { Font, Color } from './interfaces'

export const color: Color = {
  black: '#000000',
  white: '#ffffff',
  grey: {
    100: '#222222',
    600: '#999999',
    800: '#d8d8d8',
    900: '#f5f5f5',
  },
  text: '#222222',
  main: 'd0021b',
}

export const font: Font = {
  size: {
    xxs: '0.6875rem',
    xs: '0.75rem',
    sm: '0.8125rem',
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
}

const mediaQ = (size: number): string =>
  `@media only screen and (max-width: ${size}px)`

export const media = {
  xs: mediaQ(380),
  sm: mediaQ(576),
  md: mediaQ(768),
  lg: mediaQ(992),
  xl: mediaQ(1200),
  xxl: mediaQ(1440),
}
