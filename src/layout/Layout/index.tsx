import React, { useContext, useEffect } from 'react'
import { NextPage } from 'next'

import {
  ActivePage,
  HeaderContext,
  HeaderProvider,
} from './components/Header/context'
import Header from './components/Header'
import Footer from './components/Footer'

type Props = {
  activePage: ActivePage
}

const Layout: NextPage<Props> = ({ children, activePage }) => {
  const { dispatch } = useContext(HeaderContext)

  return (
    <HeaderProvider>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </HeaderProvider>
  )
}

export default Layout
