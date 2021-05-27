import styled from '@emotion/styled'

import theme from 'src/theme'

export const BlogPostTileWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 100px;

    ${theme.media.lg} {
      margin-bottom: 50px;
    }
  }
`

export const PostTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 0;
  ${theme.mixins.textContentLink(true, theme.color.main)}
`

export const PostDescription = styled.p`
  margin-bottom: 0;
`
