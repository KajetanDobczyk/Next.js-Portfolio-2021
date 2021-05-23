import { color } from './variables'

const mixins = {
  content: `
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    `,
  textContentLink: (underlined?: boolean, underlineColor?: string) => `
  display: inline-block;
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
            text-decoration-line: ${underlined ? 'underline' : 'none'};
            text-decoration-color: ${color.grey[800]};

            &:before {
                position: absolute;
                content: attr(data-content);
                color: inherit;
                text-decoration-line: underline;
                text-decoration-color: ${underlineColor || color.text};
                clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
                transition: clip-path 275ms ease;
            }
        }
    `,
}

export default mixins
