import React, { useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import './Login.css'

const Login = props => {

    const [loginButtonEnabled] = useState(false)
    return (
        <div className="login-component align-items-center d-flex">
            <Card id="login-card">
                <Card.Body>
                    <Card.Title className="display-4">Loan Management App</Card.Title>
                    <form className="login-form">
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" size="lg" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" size="lg" />
                        </Form.Group>
                        <Alert variant="danger">Incorrect email or password!</Alert>
                        <Button type="submit" className="w-100" disabled={!loginButtonEnabled}>Login</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login