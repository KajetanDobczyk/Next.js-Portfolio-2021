import styled from '@emotion/styled'
import theme from 'src/theme'

export const HeaderWrapper = styled.div`
  width: 100%;
`

export const Content = styled.div`
  max-width: ${theme.dimensions.content};
  margin: 0 auto;
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
  }
`
