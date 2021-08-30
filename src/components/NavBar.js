import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

function NavBar() {
    const isAuth = false //UserStore - Redux или Mobx 
    const login = 'Login'//UserStore
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand style={{ color: "grey" }}>Admin UI</Navbar.Brand>
            {isAuth &&
                <>
                    <Nav className="me-auto">
                        <Button>Add new</Button>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link style={{ color: "white" }}>{login}</Nav.Link>
                        <Nav.Link href="#logout" style={{ color: "white" }}>Logout</Nav.Link>
                    </Nav>
                </>
            }
        </Navbar>
    )
}

export default NavBar
