import styled from '@emotion/styled'
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

import theme from 'src/theme'

export const ContactWrapper = styled.div`
  padding: 150px 0 0;
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  ${theme.mixins.content}
  align-items: flex-start;
  min-height: 500px;

  ${theme.media.md} {
    align-items: center;
    padding-bottom: 50px;
    min-height: 0;
  }

  a {
    display: inline-block;
    ${theme.mixins.textContentLink(false)}
  }
`

export const Title = styled.h2`
  position: relative;
  color: ${theme.color.main};
  margin: 0 0 20px;
  z-index: 1;

  ${theme.media.lg} {
    max-width: 400px;
  }
  ${theme.media.md} {
    text-align: center;
    width: 100%;
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
  opacity: 0.1;

  ${theme.media.lg} {
    width: 500px;
    height: 500px;
  }
  ${theme.media.md} {
    opacity: 0.1;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    width: 400px;
    height: 400px;
    z-index: -1;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;

  ${theme.media.md} {
    margin-bottom: 50px;
  }
`

export const SocialIcon = styled(ReactSocialIcon)`
  max-width: 30px;
  max-height: 30px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
