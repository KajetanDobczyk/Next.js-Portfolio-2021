import styled from '@emotion/styled'

import theme from 'src/theme'

export const Content = styled.div`
  ${theme.mixins.content}
  flex-direction: row;
  justify-content: space-between;
  margin: 100px auto;
`

export const PostsWrapper = styled.div`
  width: 61.8%;
  margin-right: 75px;
`

export const Sidebar = styled.div`
  flex: 1;
  border: 1px solid ${theme.color.grey[900]};
  padding: 20px;
  margin-left: 75px;
`
