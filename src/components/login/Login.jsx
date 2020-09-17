import React, { useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import './Login.css'
import { connect } from "react-redux"
import { loginSuccess } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const mapStateToProps = state => {
    return { token: state.token };
}

const mapDispatchToProps = dispatch => {
    return { loginSuccess: token => dispatch(loginSuccess(token)) };
}

const Login = props => {
    const history = useHistory();
    const { register, handleSubmit, errors, formState } = useForm()

    const { touched } = formState;
    const headers = { 
        'Authorization' : 'Bearer scbpod2'
    }

    const onSubmit = data => {
       

    axios.post('http://localhost:8081/api/login/authenticate', data, headers )
        .then( (response)=> {
                          console.log(response.data.token);
                          props.loginSuccess(response.data.token)
        })
        .catch((error)=> {
         // console.log(error);
         console.log('in valid')
        });



         // props.loginSuccess("token")
    }


    useEffect(()=>{
        if(props.token.length>0){
            history.push("/loan-search")
        }
    },[props.token,history])

    


    return (
        <div data-testid="login" className="login-component align-items-center d-flex">
            <Card id="login-card">
                <Card.Body>
                    <Card.Title className="display-4">Loan Management App</Card.Title>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control data-testid="email-input" name="emailId" placeholder="Enter email" size="lg"
                                ref={register({ required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="password-formgroup">
                            <Form.Label>Password</Form.Label>
                            <Form.Control data-testid="password-input" name="password" type="password" placeholder="Enter password" size="lg"
                                ref={register({ required: true, min: 1 })} />
                            {!(errors.emailId || errors.password) && <p className="login-message-blank">  &zwnj;</p>}
                            {(errors.emailId || errors.password) && <p className="text-center login-message">Invalid email or password!</p>}
                        </Form.Group>
                        <Button data-testid="login-button" type="submit" className="w-100 login-button" disabled={(Object.keys(touched).length !== 2) ||
                            (Object.keys(errors).length > 0)}>Login</Button>

                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)