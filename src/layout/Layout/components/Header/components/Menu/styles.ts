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

  &:last-child {
    margin-right: 0;
  }

  ${theme.media.xl} {
    margin: 0 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    ${theme.mixins.textContentLink}
    font-family: ${theme.font.family.sans};
    padding: 5px 10px;
    white-space: nowrap;
    font-size: 15px;
    line-height: 1;
    font-weight: 400;

    > span {
      text-decoration: ${isActive ? 'underline' : 'none'};
    }
  }
`,
)
