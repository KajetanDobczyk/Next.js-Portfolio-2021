export type Color = {
  black: string
  white: string
  grey: Record<number, string>
  text: string
  main: string
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
}

export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none'

export type ThemeName = 'siemens' | 'ispot'

export const isThemeName = (
  theme: string | undefined | null,
): theme is ThemeName =>
  (theme as ThemeName) === 'siemens' || (theme as ThemeName) === 'ispot'

export interface ITheme {
  name: ThemeName
  logoUrl: string
  color: Color
}
