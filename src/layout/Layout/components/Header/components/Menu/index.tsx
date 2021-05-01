import React from 'react'
import Link from 'next/link'

import { Route } from 'src/config/routes'

import { ActivePage } from '../../context'
import * as S from './styles'

type Props = {
  routes: Route[]
  mobile?: boolean
  activePage: ActivePage
}

const Menu: React.FC<Props> = ({ routes, mobile, activePage }) => (
  <S.MenuWrapper className={`menu ${mobile ? 'mobile-menu' : ''}`}>
    {routes.map((route, index) => (
      <S.MenuItem key={index} isActive={activePage === route.activeLabel}>
        <Link href={route.url}>
          <a>
            <span data-content={route.name}>{route.name}</span>
          </a>
        </Link>
      </S.MenuItem>
    ))}
  </S.MenuWrapper>
)

export default Menu
