import React, { NextPage } from 'next'

import { HeaderProvider } from './components/Header/context'
import Header from './components/Header'
import Footer from './components/Footer'

import * as S from './styles'

type Props = {
  noPadding?: boolean
}

const Layout: NextPage<Props> = ({ children, noPadding }) => (
  <HeaderProvider>
    <Header />
    <S.Body noPadding={noPadding}>{children}</S.Body>
    <Footer />
  </HeaderProvider>
)

export default Layout
