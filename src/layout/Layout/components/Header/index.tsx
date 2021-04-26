import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import routes from 'src/config/routes'

import Menu from './components/Menu'
import MobileMenu from './components/MobileMenu'
import * as S from './styles'

const Header = () => (
  <S.StyledSticky enabled={true} innerZ={9999} activeClass="nav-sticky">
    <S.HeaderMainWrapper>
      <S.HeaderWrapper>
        <MobileMenu items={routes} />
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
        <S.MenuWrapper>
          <Menu items={routes} />
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </S.HeaderMainWrapper>
  </S.StyledSticky>
)

export default Header
