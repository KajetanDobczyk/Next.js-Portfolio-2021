import { color, font } from './variables'

const theme = {
  color,
  font,
  mixins: {
    content: `
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    `,
  },
}

export default theme
