import styled from '@emotion/styled'

import theme from 'src/theme'

export const BlogPostWrapper = styled.div`
  ${theme.mixins.content}
  margin: 50px auto;
`

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`

export const PostTitle = styled.h2`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 0;

  span {
    background-color: ${theme.color.white};
    padding: 0 20px;
  }
  &:before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    background-color: ${theme.color.grey[800]};
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 0);
    z-index: -1;
  }
`

export const PostContent = styled.div`
  iframe {
    margin-bottom: 1rem;
  }
`
