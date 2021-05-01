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
    textContentLink: `
        cursor: pointer;
        position: relative;
        transition: clip-path 275ms ease;

        &:hover span:before {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        span {
            position: relative;
            display: inline-block;
            color: $blue;

            &:before {
                position: absolute;
                content: attr(data-content);
                color: inherit;
                text-decoration: underline;
                text-decoration-color: inherit;
                clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
                transition: clip-path 275ms ease;
            }
        }
    `,
  },
}

export default theme
