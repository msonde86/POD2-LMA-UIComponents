import React from 'react'
import ReactDom from 'react-dom'
import {Login} from '../Login'
import 'mutationobserver-shim';
import {render} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

test("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDom.render(<Login/>,div)
    ReactDom.unmountComponentAtNode(div)
})

test("contains required text content only",()=>{
   const {getByTestId} = render(<Login/>)
   expect(getByTestId('login')).toHaveTextContent("Loan Management AppEmail addressPassword ‌Login")
})

test("login button is disabled on load",()=>{
    const {getByTestId} = render(<Login/>)
    expect(getByTestId('login-button')).toBeDisabled()
})

test("email input exists",()=>{
    const {getByTestId} = render(<Login/>)
    expect(getByTestId('email-input')).toBeTruthy()
})

test("password input exists",()=>{
    const {getByTestId} = render(<Login/>)
    expect(getByTestId('password-input')).toBeTruthy()
})

