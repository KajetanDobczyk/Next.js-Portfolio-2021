import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Menu from './components/Menu'
import MobileMenu from './components/MobileMenu'
import * as S from './styles'

const Header = () => (
  <S.StyledSticky enabled={true} innerZ={9999} activeClass="nav-sticky">
    <S.HeaderMainWrapper>
      <S.HeaderWrapper>
        <S.Logo>
          <Link href="/">
            <a>
              <Image
                src="/images/logo-lightbg.svg"
                alt="Kajetan Dobczyk"
                width={50}
                height={50}
              />
              <h1>Kajetan Dobczyk</h1>
            </a>
          </Link>
        </S.Logo>
        <MobileMenu />
        <S.MenuWrapper>
          <Menu />
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </S.HeaderMainWrapper>
  </S.StyledSticky>
)

export default Header
