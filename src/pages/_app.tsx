import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

import { ContextProvider } from 'src/config/context'
import globalStyles from 'src/theme/global'

const App = ({ Component, pageProps }: AppProps) => (
  <ContextProvider>
    <Global styles={css(globalStyles)} />
    <Component {...pageProps} />
  </ContextProvider>
)
export default App
