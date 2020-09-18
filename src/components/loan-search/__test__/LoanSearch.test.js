import React from 'react'
import ReactDom from 'react-dom'
import {LoanSearch} from '../LoanSearch'
import 'mutationobserver-shim';
import { render, fireEvent, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"


afterEach(cleanup)

test("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDom.render(<LoanSearch />, div)
    ReactDom.unmountComponentAtNode(div)
})


test("login button is disabled on load", () => {
    const { getByTestId } = render(<LoanSearch />)
    expect(getByTestId('search-button')).toBeDisabled()
})

test("borrower input exists", () => {
    const { getByTestId } = render(<LoanSearch />)
    expect(getByTestId('borrower-input')).toBeTruthy()
})

test("loan input exists", () => {
    const { getByTestId } = render(<LoanSearch />)
    expect(getByTestId('loan-input')).toBeTruthy()
})

test("ammount input exists", () => {
    const { getByTestId } = render(<LoanSearch />)
    expect(getByTestId('ammount-input')).toBeTruthy()
})

test("borrower input works", () => {
    const { getByTestId } = render(<LoanSearch />)
    fireEvent.change(getByTestId("borrower-input"), {
        target: { value: "name" }
    });
    expect(getByTestId('borrower-input').value).toBe("name")
})

test("loan input works and allows number only", () => {
    const { getByTestId } = render(<LoanSearch />)
    fireEvent.change(getByTestId("loan-input"), {
        target: { value: "name" }
    });
    fireEvent.change(getByTestId("loan-input"), {
        target: { value: "123" }
    });
    expect(getByTestId('loan-input').value).toBe("123")
    expect(getByTestId('loan-input').value).not.toBe("name123")
})

test("ammount input works and allows number only", () => {
    const { getByTestId } = render(<LoanSearch />)
    fireEvent.change(getByTestId("ammount-input"), {
        target: { value: "name" }
    });
    fireEvent.change(getByTestId("ammount-input"), {
        target: { value: "123" }
    });
    expect(getByTestId('ammount-input').value).toBe("123")
    expect(getByTestId('ammount-input').value).not.toBe("name123")
})


