import React, { useContext } from 'react'
import RcDrawer from 'rc-drawer'
import 'rc-drawer/assets/index.css'
import Image from 'next/image'
import Link from 'next/link'

import Menu from '../Menu'
import * as S from './styles'
import { HeaderContext } from '../../context'

type MobileMenuProps = {
  items: any
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, ...props }) => {
  const { state, dispatch } = useContext(HeaderContext)

  const handleToggleDrawer = () =>
    dispatch({
      type: 'TOGGLE_DRAWER',
    })

  return (
    <S.MobileMenuWrapper {...props}>
      <div
        className="drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={handleToggleDrawer}
      >
        <S.HamburgerIcon>
          <span />
          <span />
          <span />
        </S.HamburgerIcon>
      </div>
      <RcDrawer
        open={state.isDrawerOpen}
        maskClosable={true}
        onClose={handleToggleDrawer}
        placement="left"
        width="240"
        handler={false}
        level={null}
        duration=".4s"
      >
        <S.DrawerContent>
          <S.DrawerHead>
            <S.DrawerLogo>
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo-lightbg.svg"
                    alt="Kajetan Dobczyk"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </S.DrawerLogo>
            <S.DrawerClose onClick={handleToggleDrawer}>X</S.DrawerClose>
          </S.DrawerHead>
          <Menu items={items} mobile />
        </S.DrawerContent>
      </RcDrawer>
    </S.MobileMenuWrapper>
  )
}

export default MobileMenu
