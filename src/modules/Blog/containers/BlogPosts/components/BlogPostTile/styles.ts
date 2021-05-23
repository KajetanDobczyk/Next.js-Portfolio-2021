import styled from '@emotion/styled'

import theme from 'src/theme'

export const BlogPostTileWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 100px;
  }
`

export const PostTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 0;
  ${theme.mixins.textContentLink(true, theme.color.main)}
`

export const PostInfo = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: ${theme.font.size.xs};
  font-family: ${theme.font.family.sans};
  color: ${theme.color.grey[600]};
`
