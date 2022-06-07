import { navbar } from 'config/navbar'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import { SmallDevicesHidden } from 'styles/Global'

const NavbarStyle = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    li {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primaryTextColor};
      cursor: pointer;
      @media ${device.md} {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  ${SmallDevicesHidden}
`

function Navbar() {
  return (
    <NavbarStyle>
      <ul>
        {navbar.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </NavbarStyle>
  )
}

export default Navbar
