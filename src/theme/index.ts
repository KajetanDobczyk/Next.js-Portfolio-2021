import { color, font, media } from './variables'

const theme = {
  color,
  font,
  media,
  dimensions: {
    header: {
      big: '90px',
      medium: '80px',
      small: '60px',
    },
  },
  mixins: {
    content: `
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    `,
  },
}

export default theme
