import styled from '@emotion/styled'

import theme from 'src/theme'

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.color.white};
  color: ${theme.color.text};
  padding: 40px 0;
  border-top: 1px solid ${theme.color.grey[800]};

  ${theme.media.sm} {
    padding: 20px 0;
  }
`

export const Content = styled.div`
  ${theme.mixins.content}
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 0;
  }

  a {
    ${theme.mixins.textContentLink(true)}
    color: ${theme.color.main};
  }
`
