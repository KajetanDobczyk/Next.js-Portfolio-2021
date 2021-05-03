const mixins = {
  content: `
        display: flex;
        flex-direction: column;
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
}

export default mixins
