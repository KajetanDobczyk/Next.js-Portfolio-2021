import styled from '@emotion/styled'

import theme from 'src/theme'

export const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const MenuItem = styled.li<{ isActive: boolean }>(
  ({ isActive }) => `
  margin: 0 20px;
  list-style: none;
  text-transform: uppercase;

  a {
    ${theme.mixins.textContentLink(false, theme.color.main)}
    font-family: ${theme.font.family.sans};
    padding: 5px 10px;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 400;

    > span {
      text-decoration: ${isActive ? 'underline' : 'none'};
      text-decoration-color: ${theme.color.main};
    }
  }
`,
)

export const SocialMediaButtonsWrapper = styled.div`
  margin-left: 10px;

  ${theme.media.lg} {
    margin-left: 15px;
  }
`
