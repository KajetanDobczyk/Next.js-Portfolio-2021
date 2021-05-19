import styled from '@emotion/styled'
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

import theme from 'src/theme'

export const ContactWrapper = styled.div`
  padding: 150px 0;

  ${theme.media.md} {
    padding: 100px 0;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  ${theme.mixins.content}
  min-height: 580px;
`

export const Title = styled.h2`
  position: relative;
  color: ${theme.color.main};
  width: 300px;
  margin: 0;
  z-index: 1;

  ${theme.media.md} {
    text-align: center;
    width: 100%;
  }
`

export const PhotoWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 570px;
  height: 480px;
  background-color: ${theme.color.grey[800]};
  z-index: 0;

  ${theme.media.md} {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    height: 300px;
    margin-top: 50px;
  }
`

export const ContactDetails = styled.div`
  position: absolute;
  top: 200px;
  right: 200px;
  width: 385px;
  padding: 50px;
  background-color: ${theme.color.grey[100]};

  ${theme.media.xl} {
    top: 350px;
  }
  ${theme.media.lg} {
    top: 450px;
    right: 70px;
  }
  ${theme.media.md} {
    position: relative;
    top: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
  }

  a {
    display: block;
    ${theme.mixins.textContentLink(false, theme.color.white)}
    color: ${theme.color.white};
    line-height: 2;
  }
`

export const DetailsHeading = styled.h4`
  color: ${theme.color.white};
  margin-bottom: 20px;
`

export const SocialLinks = styled.div`
  position: absolute;
  bottom: -50px;
  right: 20px;
`

export const SocialIcon = styled(ReactSocialIcon)`
  max-width: 30px;
  max-height: 30px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
