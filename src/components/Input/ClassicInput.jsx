import styled from 'styled-components'

const InputStyle = styled.div`
  position: relative;
`

const InputBox = styled.input`
  border: 1px solid #707070;
  border-radius: 20px;
  width: 300px;
  height: 65px;
  font-size: 14px;
  padding: 0 50px;
  background: ${({ theme }) => theme.colors.background};
`

const Label = styled.label`
  background: ${({ theme }) => theme.colors.background};
  padding: 0 10px;
  position: absolute;
  left: 20px;
  top: -8px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`

const Icon = styled.img`
  position: absolute;
  left: 20px;
  top: 21px;
  width: 19px;
  height: 23px;
`

function ClassicInput({
  name,
  value,
  label,
  type,
  placeholder,
  icon,
  onChange,
}) {
  return (
    <InputStyle>
      <Label htmlFor={name}>{label}</Label>
      <InputBox
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
      <Icon src={icon} />
    </InputStyle>
  )
}

export default ClassicInput
