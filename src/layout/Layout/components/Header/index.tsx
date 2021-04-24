import React from 'react'
import Link from 'next/link'

import routes from 'src/config/routes'

import * as S from './styles'

const Header: React.FC = () => (
  <S.HeaderWrapper>
    <S.HeaderMenu>
      <li>
        {routes.map((route) => (
          <Link href={route.path}>
            <a>{route.name}</a>
          </Link>
        ))}
      </li>
    </S.HeaderMenu>
  </S.HeaderWrapper>
)

export default Header
