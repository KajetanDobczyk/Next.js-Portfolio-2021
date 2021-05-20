import styled from '@emotion/styled'

import theme from 'src/theme'

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.white};
  color: ${theme.color.text};
  padding: 40px 0;
  border-top: 1px solid ${theme.color.grey[800]};
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
