import { ReactComponent as Star } from 'assets/icons/star.svg'
import Button from 'components/Basic/Button'
import BasicInput from 'components/Input/BasicInput'
import useForm from 'hooks/useForm'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'
import { Box } from 'styles/Global'

const FormStyle = styled.form``

const TextStyle = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  svg {
    margin-right: 16px;
  }
  @media ${device.sm} {
    display: none;
  }
`

const Form = ({ handleAddedInList }) => {
  const { user, onChangeInput, onSubmitForm } = useForm({ name: '', email: '' })

  const submitForm = () => {
    handleAddedInList()
    onSubmitForm()
  }

  const { name, email } = user

  return (
    <FormStyle onSubmit={submitForm}>
      <BasicInput
        label="Name"
        name="name"
        value={name}
        onChange={onChangeInput}
        type="text"
        placeholder="Your Name"
      />
      <BasicInput
        label="Email"
        name="email"
        value={email}
        onChange={onChangeInput}
        type="email"
        placeholder="Your Email"
        required
      />
      <Box mt={50} flxRight smNone>
        <TextStyle>
          <Star />
          Required field
        </TextStyle>
      </Box>
      <Box mt={40} flxRight>
        <Button title="Join the waitlist" />
      </Box>
    </FormStyle>
  )
}

export default Form
