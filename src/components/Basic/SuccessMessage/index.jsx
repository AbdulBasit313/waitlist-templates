import styled from 'styled-components'
import { ReactComponent as SuccessIcon } from 'assets/icons/check-mark.svg'
import { device } from 'styles/BreakPoints'

const SuccessMessageStyle = styled.div`
  @media ${device.md} {
    padding: 26px;
    svg {
      width: 100px;
    }
  }
  p {
    margin-top: 24px;
    font-size: 44px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
    @media ${device.lg} {
      font-size: 28px;
    }
    @media ${device.md} {
      font-size: 36px;
    }
    @media ${device.sm} {
      font-size: 24px;
    }
  }
`

function SuccessMessage({ message }) {
  return (
    <SuccessMessageStyle>
      <SuccessIcon />
      <p>{message}</p>
    </SuccessMessageStyle>
  )
}

export default SuccessMessage
