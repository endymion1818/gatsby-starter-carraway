import React, { useRef, useState } from 'react'
import { FieldFeedback, FieldFeedbacks, FormWithConstraints } from 'react-form-with-constraints'
import styled from 'styled-components'

import { ButtonStyles } from '../Atoms/Link'

export const FormWrapper = styled.div`
  /* Form style reset */
  label {
    display: inline-block;
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
`

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// See https://en.wikipedia.org/wiki/List_of_the_most_common_passwords
async function isACommonPassword(password: string) {
  await sleep(1000)
  return [
    '123456',
    'password',
    '12345678',
    'qwerty',
    '12345',
    '123456789',
    'letmein',
    '1234567',
    'football',
    'iloveyou',
    'admin',
    'welcome',
    'monkey',
    'login',
    'abc123',
  ].includes(password.toLowerCase())
}

const Form = () => {
  const form = useRef<FormWithConstraints | null>(null)

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    phone: '',
  })
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(false)

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target

    setInputs(prevState => {
      return { ...prevState, [target.name]: target.value }
    })

    // Validates only the given field and returns the related FieldValidation structures
    const fields = await form.current!.validateFields(target)

    const fieldIsValid = fields.every(fieldFeedbacksValidation =>
      fieldFeedbacksValidation.isValid()
    )

    setSignUpButtonDisabled(!form.current!.isValid())
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Validates the non-dirty fields and returns the related FieldValidation structures
    const fields = await form.current!.validateForm()

    // or simply use form.current.isValid()
    const formIsValid = fields.every(field => field.isValid())

    setSignUpButtonDisabled(!form.current!.isValid())
    if (formIsValid) {
      alert(`Valid form\n\ninputs =\n${JSON.stringify(inputs, null, 2)}`)
    }
  }

  return (
    <FormWrapper>
      <FormWithConstraints ref={form} onSubmit={handleSubmit} action="actionGoesHere" noValidate>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            className="form-control"
            type="name"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
            required
            minLength={5}
          />
          <FieldFeedbacks for="name">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
            <FieldFeedback when="valid">Looks good!</FieldFeedback>
          </FieldFeedbacks>
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={inputs.email}
            onChange={handleChange}
            required
            minLength={5}
          />
          <FieldFeedbacks for="email">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
            <FieldFeedback when="valid">Looks good!</FieldFeedback>
          </FieldFeedbacks>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your phone number</label>
          <input
            className="form-control"
            type="phone"
            name="phone"
            id="phone"
            value={inputs.phone}
            onChange={handleChange}
            required
            minLength={5}
          />
          <FieldFeedbacks for="phone">
            <FieldFeedback when="tooShort">Too short</FieldFeedback>
            <FieldFeedback when="*" />
            <FieldFeedback when="valid">Looks good!</FieldFeedback>
          </FieldFeedbacks>
        </div>

        <button disabled={signUpButtonDisabled}>Send my details</button>
      </FormWithConstraints>
    </FormWrapper>
  )
}

export default Form
