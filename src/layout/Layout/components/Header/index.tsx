import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import routes from 'src/config/routes'

import Menu from './components/Menu'
import MobileMenu from './components/MobileMenu'
import * as S from './styles'
import { ActivePage } from './context'

type Props = {
  activePage: ActivePage
}

const Header: React.FC<Props> = ({ activePage }) => (
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
          <Menu routes={routes} activePage={activePage} />
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </S.HeaderMainWrapper>
  </S.StyledSticky>
)

export default Header
