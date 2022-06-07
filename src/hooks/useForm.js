import { useState } from 'react'

const useForm = (formState) => {
  const [user, setUser] = useState(formState)

  const onChangeInput = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log('user  ==>', user)
  }

  return {
    user,
    onChangeInput,
    onSubmitForm,
  }
}

export default useForm
