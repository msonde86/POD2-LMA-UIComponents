import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';


const Header = props => {

    const pathname = useLocation().pathname;

    return (
        <>
            {pathname !== "/login" && <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Loan Management App</Navbar.Brand>
                <span className="ml-auto">
                    <Button variant="outline-light">Logout</Button>
                </span>
            </Navbar>}
        </>
    )
}


export default Header