import styled from '@emotion/styled'

import theme from 'src/theme'

export const MobileMenuWrapper = styled.div`
  display: none;

  ${theme.media.lg} {
    display: block;
  }
`

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    background-color: ${theme.color.grey[200]};
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
      width: 20px;
    }
    ${theme.media.lg} {
      background-color: ${theme.color.text};
    }
  }
`

export const DrawerContent = styled.div`
  .mobile-menu {
    display: block;
    padding-top: 3rem;

    li {
      margin: 0 0 38px 0;

      a {
        display: block;
        position: relative;
        padding-left: 30px;
        padding-right: 30px;

        &.active-link {
          &:before {
            opacity: 1;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 3px;
          height: 18px;
          top: 50%;
          left: 0;
          opacity: 0;
          background: ${theme.color.grey[200]};
          transform: translateY(-50%);
        }
      }
    }
  }
`

export const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
`

export const DrawerLogo = styled.div`
  max-width: 3rem;
  padding-left: 30px;

  img {
    max-width: 100%;
  }
`

export const DrawerClose = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  padding: 0 15px;
`
