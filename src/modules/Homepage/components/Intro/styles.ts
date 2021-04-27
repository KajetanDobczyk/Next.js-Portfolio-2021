import styled from '@emotion/styled'

import theme from 'src/theme'

export const IntroWrapper = styled.div`
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 200px;
`

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${theme.mixins.content}
  justify-content: space-between;
`

export const Title = styled.h1`
  span {
    color: ${theme.color.main};
  }
`

export const Info = styled.div`
  display: flex;
  position: relative;
  margin-left: 400px;

  >div: first-child {
    margin-right: 130px;
  }

  h3 {
    margin-bottom: 40px;
  }

  p {
    color: ${theme.color.grey[600]};
    line-height: 2;
  }

  &:before {
    position: absolute;
    top: 13px;
    left: -200px;
    content: '';
    width: 120px;
    height: 3px;
    background-color: ${theme.color.black};
  }
`
