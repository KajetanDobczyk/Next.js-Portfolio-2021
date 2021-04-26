import styled from '@emotion/styled'
import theme from 'src/theme'

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: ${theme.color.white};
`

export const Content = styled.div`
  ${theme.mixins.content}
  padding-top: 40px;
  padding-bottom: 40px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;

  li {
    display: block;

    &:not(:first-child) {
      margin-left: 45px;
    }

    a {
      font-family: ${theme.font.family.sans};
      font-weight: 400;
    }
  }
`
