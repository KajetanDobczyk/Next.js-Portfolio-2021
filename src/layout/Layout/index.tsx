import React, { useEffect } from 'react'
import { NextPage } from 'next'

import { ActivePage } from 'src/config/routes'
import { useContext } from 'src/config/context'

import Header from './components/Header'
import Footer from './components/Footer'

type Props = {
  activePage: ActivePage
}

const Layout: NextPage<Props> = ({ children, activePage }) => {
  const { dispatch } = useContext()

  useEffect(() => {
    dispatch({ type: 'setActivePage', payload: activePage })
    dispatch({ type: 'toggleDrawer' })
  }, [dispatch])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
