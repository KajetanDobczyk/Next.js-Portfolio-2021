import styled from '@emotion/styled'
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

import theme from 'src/theme'

export const ContactWrapper = styled.div`
  padding: 150px 0;
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
`

export const PhotoWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 570px;
  height: 480px;
  background-color: ${theme.color.grey[800]};
  z-index: 0;
`

export const ContactDetails = styled.div`
  position: absolute;
  top: 200px;
  right: 200px;
  width: 385px;
  padding: 50px;
  background-color: ${theme.color.grey[100]};

  a {
    display: block;
    color: ${theme.color.grey[600]};
    line-height: 2;

    &:hover {
      text-decoration: underline;
    }
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
