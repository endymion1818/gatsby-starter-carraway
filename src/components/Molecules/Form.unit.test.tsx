import { cleanup, render, fireEvent } from '@testing-library/react'
import React from 'react'
import Form from './Form'


beforeEach(cleanup)

it('Should render', () => {
  const { container } = render(<Form />)
  expect(container).toMatchSnapshot()
})

it('calls onSubmit prop function when form is submitted', () => {
  const onSubmitFn = jest.fn();
  const wrapper = render(<Form onSubmit={onSubmitFn}/>);
  const form = wrapper.findAllByTestId('form');
  const formSubmit = wrapper.getByTestId('submit-button');
  
  fireEvent.click(formSubmit)
  
  expect(onSubmitFn).not.toHaveBeenCalled();
});
