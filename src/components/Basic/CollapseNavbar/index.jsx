import { ReactComponent as MenuIcon } from 'assets/icons/hamburger.svg'
import { ReactComponent as Logo } from 'assets/images/Logo.svg'
import { useState } from 'react'
import styled from 'styled-components'
import { SmallDeviceShow } from 'styles/Global'

const MenuWrapper = styled.div`
  position: relative;
  ${SmallDeviceShow}
`

const CollapseNavbarStyle = styled.div`
  height: 70px;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.paddings.container};
`

const LogoWrapper = styled.div`
  width: 125px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.primaryTextColor};
  }
`
const MenuIconWrapper = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.primaryTextColor};
  }
  cursor: pointer;
`

const NavMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
  ul {
    padding: 30px;
    text-align: center;
    li {
      line-height: 1.3;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.text};
      margin-top: 20px;
      cursor: pointer;
    }
  }
`

const CollapseNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuShow = () => {
    setShowMenu(!showMenu)
  }

  return (
    <MenuWrapper>
      <CollapseNavbarStyle>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MenuIconWrapper>
          <MenuIcon onClick={handleMenuShow} />
        </MenuIconWrapper>
      </CollapseNavbarStyle>
      {showMenu && (
        <NavMenu>
          <ul>
            <li>Home</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>About</li>
          </ul>
        </NavMenu>
      )}
    </MenuWrapper>
  )
}

export default CollapseNavbar
