import styled from '@emotion/styled'

import theme from 'src/theme'

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.grey[100]};
  color: ${theme.color.white};
  padding: 50px 0;
`

export const Content = styled.div`
  ${theme.mixins.content}
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    ${theme.mixins.textContentLink()}
    color: ${theme.color.main};
  }
`
