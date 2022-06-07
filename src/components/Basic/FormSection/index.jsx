import Form from 'components/Basic/Form'
import Navbar from 'components/Basic/Navbar'
import SuccessMessage from 'components/Basic/SuccessMessage'
import { useState } from 'react'
import styled from 'styled-components'
import { device } from 'styles/BreakPoints'

const FormSectionStyle = styled.section`
  width: 650px;
  margin: 0 auto;
  padding: 50px 30px 30px 30px;
  @media ${device.lg} {
    width: 550px;
  }
  @media ${device.md} {
    width: 500px;
    width: 100%;
  }
  @media ${device.sm} {
    padding-bottom: 200px;
    padding-top: 0;
  }
`

const FormWrapper = styled.div`
  margin-top: 17vh;
  @media ${device.lg} {
  }
  @media ${device.sm} {
    margin-top: 10px;
  }
`

const FormSection = () => {
  const [addedInList, setAddedInList] = useState(false)

  const handleAddedInList = () => {
    setAddedInList(true)
  }

  return (
    <FormSectionStyle>
      <Navbar />
      <FormWrapper>
        {!addedInList ? (
          <Form handleAddedInList={handleAddedInList} />
        ) : (
          <SuccessMessage message="You have been successfully added to the list!" />
        )}
      </FormWrapper>
    </FormSectionStyle>
  )
}

export default FormSection
