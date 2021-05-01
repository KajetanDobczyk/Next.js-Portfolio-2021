import styled from '@emotion/styled'

export const Body = styled.div<{ noPadding?: boolean }>(
  ({ noPadding }) => `
  padding-top: ${noPadding ? 0 : '130px'};
`,
)
