import React from 'react'
import Link from 'next/link'

import routes from 'src/config/routes'
import { useContext } from 'src/config/context'
import SocialMediaButtons from 'src/components/SocialMediaButtons'

import * as S from './styles'

type Props = {
  mobile?: boolean
}

const Menu: React.FC<Props> = ({ mobile }) => {
  const { state } = useContext()

  return (
    <S.MenuWrapper className={`menu ${mobile ? 'mobile-menu' : ''}`}>
      {routes.map((route, index) => (
        <S.MenuItem
          key={index}
          isActive={state.activePage === route.activeLabel}
        >
          <Link href={route.url}>
            <a>
              <span data-content={route.name}>{route.name}</span>
            </a>
          </Link>
        </S.MenuItem>
      ))}
      <S.SocialMediaButtonsWrapper>
        <SocialMediaButtons />
      </S.SocialMediaButtonsWrapper>
    </S.MenuWrapper>
  )
}

export default Menu
