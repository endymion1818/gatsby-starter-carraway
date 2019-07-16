import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ButtonStyles } from '../Atoms/Link'
import * as token from '../tokens'

interface IErrors {
  email: string[]
  yourname: string[]
  phone: string[]
}

const SForm = styled.form`
  /* Form style reset */
  label {
    display: block;
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 120%;
    font-weight: bold;
  }
  input[type='search'] {
    box-sizing: border-box;
  }
  input[type='checkbox'],
  input[type='radio'] {
    margin: 1px\9 0 0;
    line-height: normal;
  }
  input[type='file'] {
    display: block;
  }
  input[type='range'] {
    display: block;
    width: 100%;
  }
  select[multiple],
  select[size] {
    height: auto;
  }
  input[type='checkbox']:focus,
  input[type='file']:focus,
  input[type='radio']:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  .form-control {
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
  }
  .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
  .form-control::-moz-placeholder {
    color: #999;
    opacity: 1;
  }
  .form-control:-ms-input-placeholder {
    color: #999;
  }
  .form-control::-webkit-input-placeholder {
    color: #999;
  }
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0;
  }
  .form-control[disabled],
  .form-control[readonly],
  fieldset[disabled] .form-control {
    background-color: #eee;
    opacity: 1;
  }
  .form-control[disabled],
  fieldset[disabled] .form-control {
    cursor: not-allowed;
  }
  textarea.form-control {
    height: auto;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type='date'].form-control,
    input[type='datetime-local'].form-control,
    input[type='month'].form-control,
    input[type='time'].form-control {
      line-height: 34px;
    }
    .input-group-sm input[type='date'],
    .input-group-sm input[type='datetime-local'],
    .input-group-sm input[type='month'],
    .input-group-sm input[type='time'],
    input[type='date'].input-sm,
    input[type='datetime-local'].input-sm,
    input[type='month'].input-sm,
    input[type='time'].input-sm {
      line-height: 30px;
    }
    .input-group-lg input[type='date'],
    .input-group-lg input[type='datetime-local'],
    .input-group-lg input[type='month'],
    .input-group-lg input[type='time'],
    input[type='date'].input-lg,
    input[type='datetime-local'].input-lg,
    input[type='month'].input-lg,
    input[type='time'].input-lg {
      line-height: 46px;
    }
  }
  .form-group {
    margin-bottom: 15px;
  }
  .checkbox,
  .radio {
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .checkbox label,
  .radio label {
    min-height: 20px;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
  }
  .checkbox input[type='checkbox'],
  .checkbox-inline input[type='checkbox'],
  .radio input[type='radio'],
  .radio-inline input[type='radio'] {
    position: absolute;
    margin-top: 4px\9;
    margin-left: -20px;
  }
  .checkbox-inline,
  .radio-inline {
    position: relative;
    display: inline-block;
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  fieldset[disabled] input[type='checkbox'],
  fieldset[disabled] input[type='radio'],
  input[type='checkbox'].disabled,
  input[type='checkbox'][disabled],
  input[type='radio'].disabled,
  input[type='radio'][disabled] {
    cursor: not-allowed;
  }
  form.form-hello {
    width: 100%;
  }
  form.form-hello .checkbox {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .antispam {
    display: none;
  }
  button {
    ${ButtonStyles}
  }
  .error > * {
    margin-top: ${token.ESIZE.SINGLE};
    border: 1px solid red;
    background-color: pink;
    padding: ${token.ESIZE.SINGLE};
    border-radius: ${token.EBORDERRADIUS.MEDIUM};
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
    setErrors(prevState => {
      return {
        ...prevState,
        email: validateEmail(value),
      }
    })
  }
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setErrors(prevState => {
      return {
        ...prevState,
        yourname: validateName(value),
      }
    })
  }
  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setErrors(prevState => {
      return {
        ...prevState,
        phone: validatePhone(value),
      }
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setErrors(prevState => {
      return {
        ...prevState,
        email: validateEmail(email.current!.value),
        phone: validatePhone(phone.current!.value),
        yourname: validateName(yourname.current!.value),
      }
    })
  }

  return (
    <SForm
      onSubmit={handleSubmit}
      method="POST"
      action="https://formActionGoesHere"
      data-testid="form"
    >
      <div className="form-group">
        <label htmlFor="yourname">Your Name</label>
        <input className="form-control" id="yourname" ref={yourname} onChange={handleNameChange} />
        <div className="error">
          {errors.yourname.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className="form-control" id="email" ref={email} onChange={handleEmailChange} />
        <div className="error">
          {errors.email.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone">
          Phone <small>(optional)</small>
        </label>
        <input className="form-control" id="phone" ref={phone} onChange={handlePhoneChange} />
        <div className="error">
          {errors.phone.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
      </div>

      <button data-testid="submit-button" name="submit" disabled={!isSubmitted}>
        Send
      </button>
    </SForm>
  )
}

export default Form
