import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import './Login.css'

const Login = props => {

    const { register, handleSubmit, errors, formState } = useForm()

    const { touched } = formState;
    const onSubmit = data => console.log(data)


    return (
        <div className="login-component align-items-center d-flex">
            <Card id="login-card">
                <Card.Body>
                    <Card.Title className="display-4">Loan Management App</Card.Title>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" placeholder="Enter email" size="lg"
                                ref={register({ required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter password" size="lg"
                                ref={register({ required: true, min: 1 })} />
                        </Form.Group>
                        {(errors.email || errors.password) && <Alert variant="danger">Invalid email/password!</Alert>}
                        <Button type="submit" className="w-100" disabled={(Object.keys(touched).length !== 2) ||
                            (Object.keys(errors).length > 0)}>Login</Button>

                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login