import styled from '@emotion/styled'

import theme from 'src/theme'

export const ContactWrapper = styled.div`
  padding: 150px 0 0;
  flex: 1;
  display: flex;
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  ${theme.mixins.content}
  align-items: flex-start;
  min-height: 500px;

  ${theme.media.md} {
    align-items: center;
    padding-bottom: 0;
    min-height: 0;
  }

  a {
    display: inline-block;
    ${theme.mixins.textContentLink(true)}
  }
`

export const TitleWrapper = styled.div`
  position: relative;
  z-index: 1;

  ${theme.media.xl} {
    max-width: 500px;
  }
  ${theme.media.lg} {
    max-width: 400px;
  }
  ${theme.media.md} {
    text-align: center;
    width: 100%;
  }
`

export const Link = styled.a`
  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 15px;
  }
`

export const PhotoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 600px;
  background-color: ${theme.color.grey[800]};
  z-index: 0;
  opacity: 1;

  ${theme.media.lg} {
    width: 600px;
    height: 600px;
  }
  ${theme.media.md} {
    position: relative;
    width: 90vw;
    height: 90vw;
  }
`
