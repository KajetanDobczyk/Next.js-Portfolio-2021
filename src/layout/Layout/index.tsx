import React from 'next'

import { HeaderProvider } from './components/Header/context'
import Header from './components/Header'
import Footer from './components/Footer'

import * as S from './styles'

const Layout: React.FC = ({ children }) => (
  <HeaderProvider>
    <Header />
    <S.Body>{children}</S.Body>
    <Footer />
  </HeaderProvider>
)

export default Layout
