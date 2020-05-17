import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ButtonStyles from '../Atoms/ButtonStyles'
import { borderradius, size } from '../tokens'

interface IErrors {
  email: string[]
  yourname: string[]
  phone: string[]
}

const Label = styled.label`
  display: block;
  max-width: 100%;
  margin-bottom: 5px;
  font-size: 120%;
  font-weight: bold;
`

const Input = styled.input`
  display: block;
  width: 80%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
  &::-moz-placeholder {
    color: #999;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #999;
  }
  &::-webkit-input-placeholder {
    color: #999;
  }
  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  &[disabled],
  &[readonly],
  fieldset[disabled] & {
    background-color: #eee;
    opacity: 1;
  }
  &[disabled],
  fieldset[disabled] .form-control {
    cursor: not-allowed;
  }
`

const Button = styled.button`
  ${ButtonStyles}
`

const FormGroup = styled.div`
  margin-bottom: 15px;
`

const Error = styled.div`
  & > * {
    margin-top: ${size.single};
    border: 1px solid red;
    background-color: pink;
    padding: ${size.single};
    border-radius: ${borderradius.medium};
  }
`

function validateEmail(email: string) {
  const errors = [] as string[]
  if (email.length === 0) {
    errors.push("email can't be empty")
  }
  if (!email.includes('@')) {
    errors.push('Email should contain @')
  }
  return errors
}
function validatePhone(phone: string) {
  const errors = [] as string[]
  if (phone.length === 0) {
    errors.push("Can't be empty")
  }
  return errors
}
function validateName(yourname: string) {
  const errors = [] as string[]
  if (yourname.length === 0) {
    errors.push("Can't be empty")
  }
  return errors
}

function hasErrors(errors: IErrors) {
  return errors.email.length > 0 || errors.yourname.length > 0 || errors.phone.length > 0
}

function Form() {
  const email = useRef<HTMLInputElement | null>(null)
  const yourname = useRef<HTMLInputElement | null>(null)
  const phone = useRef<HTMLInputElement | null>(null)

  const [errors, setErrors] = useState<IErrors>({
    email: [],
    yourname: [],
    phone: [],
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // if JS is disabled, the user can still use the form
    // otherwise, set initial state to false
    setIsSubmitted(false)
  }),
    // tslint:disable-next-line
    []

  useEffect(() => {
    if (hasErrors(errors)) {
      setIsSubmitted(false)
    }
    setIsSubmitted(true)
  }, [isSubmitted, errors])

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setErrors((prevState) => {
      return {
        ...prevState,
        email: validateEmail(value),
      }
    })
  }
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setErrors((prevState) => {
      return {
        ...prevState,
        yourname: validateName(value),
      }
    })
  }
  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setErrors((prevState) => {
      return {
        ...prevState,
        phone: validatePhone(value),
      }
    })
  }

  function handleSubmit() {
    setErrors((prevState) => {
      return {
        ...prevState,
        email: validateEmail(email.current!.value),
        phone: validatePhone(phone.current!.value),
        yourname: validateName(yourname.current!.value),
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/rxd_david@gmail.com">
      <FormGroup>
        <Label htmlFor="yourname">Your Name</Label>
        <Input id="yourname" required ref={yourname} onChange={handleNameChange} />
        <Error>
          {errors.yourname.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </Error>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" ref={email} onChange={handleEmailChange} required />
        <Error>
          {errors.email.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </Error>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">
          Phone <small>(optional)</small>
        </Label>
        <Input id="phone" type="tel" ref={phone} onChange={handlePhoneChange} />
        <Error>
          {errors.phone.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </Error>
      </FormGroup>
      <Button disabled={hasErrors(errors)}>Sign Up</Button>
    </form>
  )
}

export default Form
