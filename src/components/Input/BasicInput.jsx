import { ReactComponent as Star } from 'assets/icons/star.svg'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'

const InputWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  position: relative;

  @media ${device.sm} {
    flex-direction: column;
    margin-top: 30px;
  }
`

const LabelStyle = styled.label`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  font-weight: 900;
  margin-right: 50px;
  margin-top: 10px;

  @media ${device.lg} {
    font-size: 24px;
    margin-right: 40px;
    margin-top: unset;
  }
  @media ${device.sm} {
    font-size: 16px;
    margin-bottom: 10px;
    margin-right: unset;
  }
`

const InputStyle = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.inputPlaceholder};
  background-color: transparent;
  padding-bottom: 12px;
  font-size: 28px;
  font-weight: 700;
  width: 100%;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  @media ${device.lg} {
    font-size: 24px;
    padding-bottom: 9px;
  }
  @media ${device.lg} {
    font-size: 16px;
    padding-bottom: 9px;
  }
  ::placeholder {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.inputPlaceholder};
    font-weight: 800;
    @media ${device.lg} {
      font-size: 24px;
    }
    @media ${device.sm} {
      font-size: 16px;
    }
  }
`

const StarIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 25%;
  @media ${device.sm} {
    top: 55%;
  }
`

function BasicInput({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
  required,
}) {
  return (
    <InputWrapper>
      <LabelStyle>{label}</LabelStyle>
      <InputStyle
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      <StarIcon>{required && <Star />}</StarIcon>
    </InputWrapper>
  )
}

export default BasicInput
