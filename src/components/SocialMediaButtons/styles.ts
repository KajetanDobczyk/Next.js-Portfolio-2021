import styled from '@emotion/styled'

import theme from 'src/theme'

export const SocialMediaButtonsWrapper = styled.div`
  a {
    > svg > g {
      fill: ${theme.color.text};
      transition: fill 0.2s;
    }

    &:hover > svg > g {
      fill: ${theme.color.main};
    }
  }
`
