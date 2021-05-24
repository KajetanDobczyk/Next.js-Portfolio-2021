import React, { useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { ActivePage } from 'src/config/routes'
import { useContext } from 'src/config/context'

import Header from './components/Header'
import Footer from './components/Footer'
import * as S from './styles'

type Props = {
  activePage: ActivePage
  title: string
}

const Layout: NextPage<Props> = ({ children, activePage, title }) => {
  const { dispatch } = useContext()

  useEffect(() => {
    dispatch({ type: 'setActivePage', payload: activePage })
  }, [dispatch])

  return (
    <S.LayoutWrapper>
      <Head>
        <title>KD – {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.LayoutWrapper>
  )
}

export default Layout
