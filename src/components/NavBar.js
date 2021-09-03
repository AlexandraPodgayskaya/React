import React, { useContext } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { AuthContext } from '../context';

function NavBar() {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const login = localStorage.getItem('email')
    const history = useHistory()
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        history.push(LOGIN_ROUTE)
    }
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
                        <Nav.Link onClick={logout} style={{ color: "white" }}>Logout</Nav.Link>
                    </Nav>
                </>
            }
        </Navbar >
    )
}

export default NavBar
