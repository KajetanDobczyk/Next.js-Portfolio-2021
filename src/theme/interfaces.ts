export type Color = {
  black: string
  white: string
  grey: Record<number, string>
  text: string
  main: string
  blue: string
  green: string
}

export type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'xl'
  | 'xxl'
  | 'xxxl'
export type FontWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'black'

export type Font = {
  size: Record<FontSize, string>
  weight: Record<FontWeight, number>
  family: {
    sans: string
    serif: string
  }
}
