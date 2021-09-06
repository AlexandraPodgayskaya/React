import React, { useContext } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { AuthContext } from '../context';

function NavBar() {
    const { isAuth, isAdmin, setIsAuth, setIsAdmin } = useContext(AuthContext)
    const login = localStorage.getItem('email')
    const history = useHistory()
    const location = useLocation()
    const isShop = location.pathname === SHOP_ROUTE
    const logout = () => {
        setIsAuth(false)
        setIsAdmin(false)
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('isAuth')
        localStorage.removeItem('isAdmin')
        history.push(LOGIN_ROUTE)
    }
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand style={{ color: "grey", fontWeight: 700 }}>{isAdmin === 'true' ? 'Admin UI' : 'UI'}</Navbar.Brand>
            <Nav className="me-auto">
                {isAdmin === 'true' && <Button>Add new</Button>}
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link style={{ color: "white" }}>{login}</Nav.Link>
                {isShop && <Nav.Link onClick={logout} style={{ color: "white" }}>{isAuth ? 'Logout' : 'Login'}</Nav.Link>}
            </Nav>
        </Navbar >
    )
}

export default NavBar
