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
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 30px 0;
`

export const DrawerLogo = styled.div`
  img {
    height: 50px;
  }
`

export const DrawerClose = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: top;
  opacity: 0.25;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  img {
    display: block;
    width: 20px;
    height: 20px;
  }
`
