import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

function NavBar() {
    const isAuth = true //UserStore - Redux или Mobx 
    const login = 'E-mail'//UserStore
    const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand style={{ color: "grey", fontWeight: 700 }}>Admin UI</Navbar.Brand>
            {
                isAuth &&
                <>
                    <Nav className="me-auto">
                        <Button>Add new</Button>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link style={{ color: "white" }}>{login}</Nav.Link>
                        <Nav.Link onClick={() => history.push(LOGIN_ROUTE)} style={{ color: "white" }}>Logout</Nav.Link>
                    </Nav>
                </>
            }
        </Navbar >
    )
}

export default NavBar
