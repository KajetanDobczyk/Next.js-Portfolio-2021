import styled from '@emotion/styled'

import theme from 'src/theme'

export const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const MenuItem = styled.li<{ darkHeader?: boolean }>`
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
    padding: 5px 10px;
    white-space: nowrap;
    font-size: 15px;
    line-height: 1;
    font-weight: 400;
    color: ${(props) =>
      props.darkHeader ? theme.color.white : theme.color.grey[500]};
    transition: 0.15s ease-in-out;

    &:hover {
      color: ${(props) =>
        props.darkHeader ? theme.color.grey[800] : theme.color.grey[200]};
    }

    &.active-link {
      color: ${(props) =>
        props.darkHeader ? theme.color.white : theme.color.grey[200]};
      font-weight: 500;
    }
  }
`