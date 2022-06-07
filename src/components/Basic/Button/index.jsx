import styled from 'styled-components'
import { device } from 'styles/BreakPoints'

const ButtonStyle = styled.button`
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 26px;
  padding: 16px 30px;
  font-size: 20px;
  font-weight: 700;
  @media ${device.md} {
    padding: 11;
    font-size: 16px;
  }
`

function Button({ title }) {
  return <ButtonStyle>{title.toUpperCase()}</ButtonStyle>
}

export default Button
