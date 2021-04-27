import styled from '@emotion/styled'

import theme from 'src/theme'

export const TestimonialsWrapper = styled.div`
  background-color: ${theme.color.grey[100]};
  padding: 150px 0;
`

export const Content = styled.div`
  ${theme.mixins.content}
`

export const Title = styled.h2`
  width: 300px;
  margin: 0;
  color: ${theme.color.white};
`
