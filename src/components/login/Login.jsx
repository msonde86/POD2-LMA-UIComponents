import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import './Login.css'

const Login = props => {

    const { register, handleSubmit, errors, formState } = useForm()

    const { touched } = formState;
    const onSubmit = data => console.log(data)


    return (
        <div data-testid = "login" className="login-component align-items-center d-flex">
            <Card id="login-card">
                <Card.Body>
                    <Card.Title className="display-4">Loan Management App</Card.Title>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control data-testid="email-input" name="email" placeholder="Enter email" size="lg"
                                ref={register({ required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="password-formgroup">
                            <Form.Label>Password</Form.Label>
                            <Form.Control data-testid="password-input" name="password" type="password" placeholder="Enter password" size="lg"
                                ref={register({ required: true, min: 1 })} />
                        {!(errors.email || errors.password) &&<p className="login-message-blank">  &zwnj;</p>}
                        {(errors.email || errors.password) && <p className="text-center login-message">Invalid email or password!</p>}
                        </Form.Group>
                        <Button data-testid="login-button" type="submit" className="w-100 login-button" disabled={(Object.keys(touched).length !== 2) ||
                            (Object.keys(errors).length > 0)}>Login</Button>

                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login