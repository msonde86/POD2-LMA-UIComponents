import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { logout } from '../../redux/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return { token: state.token };
}

const mapDispatchToProps = dispatch => {
    return { logout: () => dispatch(logout()) };
}



const Header = props => {

    const pathname = useLocation().pathname;
    const history = useHistory()
    const logout = () => {
        props.logout()
    }

    useEffect(()=>{
        if(props.token.length<1 && pathname !== "/login"){
            console.log("token safely removed")
            history.push("/login")
        }
    },[props.token,history,pathname])

    return (
        <>
            {pathname !== "/login" && <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Loan Management App</Navbar.Brand>
                <span className="ml-auto">
                    <Button variant="outline-light" onClick={logout}>Logout</Button>
                </span>
            </Navbar>}
        </>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)