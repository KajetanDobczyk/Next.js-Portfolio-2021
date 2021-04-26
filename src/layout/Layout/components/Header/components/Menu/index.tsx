import React from 'react'
import Link from 'next/link'

import * as S from './styles'

type MenuItem = {
  url: string
  label: string
  external?: boolean
}

type Props = {
  items: MenuItem[]
  dark?: boolean
  mobile?: boolean
}

const Menu: React.FC<Props> = ({ items, dark, mobile }) => (
  <S.MenuWrapper className={`menu ${mobile ? 'mobile-menu' : ''}`}>
    {items.map((item, index) => (
      <S.MenuItem key={index} darkHeader={dark}>
        {item.external ? (
          <a href={item.url}>{item.label}</a>
        ) : (
          <Link href={item.url}>{item.label}</Link>
        )}
      </S.MenuItem>
    ))}
  </S.MenuWrapper>
)

export default Menu
