import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import routes from 'src/config/routes'

import * as S from './styles'

const Header: React.FC = () => (
  <S.HeaderWrapper>
    <S.Content>
      <Image
        src="/images/logo-lightbg.svg"
        alt="Kajetan Dobczyk"
        width={50}
        height={50}
      />
      <S.Menu>
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>
              <a>{route.name}</a>
            </Link>
          </li>
        ))}
      </S.Menu>
    </S.Content>
  </S.HeaderWrapper>
)

export default Header
