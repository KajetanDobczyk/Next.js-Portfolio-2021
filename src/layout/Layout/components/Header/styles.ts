import styled from '@emotion/styled'
import Sticky from 'react-stickynode'

import theme from 'src/theme'

export const StyledSticky = styled(Sticky)`
  .sticky-inner-wrapper {
    top: 0 !important;
    transition: top 0.5s ease-in-out;
  }
  &.nav-sticky .sticky-inner-wrapper {
    background-color: ${theme.color.white};
  }
`

export const HeaderMainWrapper = styled.header`
  position: relative;
  z-index: 99999;
  transition: 0.25s ease-in-out;
`

export const HeaderWrapper = styled.div`
  ${theme.mixins.content}
  padding: 0 20px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: ${theme.dimensions.header.big};
  transition: 0.25s ease-in-out;

  ${theme.media.lg} {
    padding: 0 1.5rem;
    height: ${theme.dimensions.header.medium};
  }
  ${theme.media.sm} {
    padding: 0 1rem;
    height: ${theme.dimensions.header.small};
  }
`

export const Logo = styled.div`
  flex-shrink: 0;

  a {
    display: flex;
    align-items: center;

    img {
      display: block;
      max-width: 100%;
      height: 40px;
      margin-right: 1rem;
    }
    h1 {
      font-size: ${theme.font.size.base};
      color: ${theme.color.grey[200]};
      margin-left: 15px;
    }
    ${theme.media.sm} {
      img {
        margin-right: 0;
      }
      h1 {
        display: none;
      }
    }
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  ${theme.media.lg} {
    display: none;
  }
`
