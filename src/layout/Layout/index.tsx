import React from 'next'

import Header from './components/Header'
import Footer from './components/Footer'

import * as S from './styles'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <S.Body>{children}</S.Body>
    <Footer />
  </>
)

export default Layout
