import type { AppProps } from 'next/app'

import { ContextProvider } from 'src/config/context'
import 'src/theme/reset.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
)

export default App
