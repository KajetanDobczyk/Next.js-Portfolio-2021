import theme from '.'

const global = `
  h1 {
    font-size: 6.25rem;

    ${theme.media.xl} {
      font-size: 5rem;
    }
    ${theme.media.md} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.125rem;
  }

  p {
    line-height: 1.5;
  }
  
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 5rem;
    }
  }
  
  @media screen and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
`

export default global
