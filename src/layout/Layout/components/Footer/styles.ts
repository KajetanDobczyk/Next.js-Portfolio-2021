import styled from '@emotion/styled'

import theme from 'src/theme'

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.black};
  color: ${theme.color.white};
`

export const Content = styled.div`
  ${theme.mixins.content}
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${theme.color.main};
  }
`
