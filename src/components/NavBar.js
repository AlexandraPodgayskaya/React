import React, { useContext, useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '../context';
import AddOrEditCertificate from '../components/modals/AddOrEditCertificate'

function NavBar() {
    const { isAuth, isAdmin, setIsAuth, setIsAdmin } = useContext(Context)
    const [addVisable, setAddVisable] = useState(false)
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
            <Navbar.Brand style={{ color: "grey", fontWeight: 700 }}>{(isShop && isAdmin === 'true') ? 'Admin UI' : 'UI'}</Navbar.Brand>
            {isShop &&
                <>
                    <Nav className="me-auto">
                        {isAdmin === 'true' && <Button onClick={() => setAddVisable(true)}>Add new</Button>}
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link style={{ color: "white" }}>{login}</Nav.Link>
                        <Nav.Link onClick={logout} style={{ color: "white" }}>{isAuth ? 'Logout' : 'Login'}</Nav.Link>
                    </Nav>
                </>}
            <AddOrEditCertificate show={addVisable} onHide={() => setAddVisable(false)} />
        </Navbar >
    )
}

export default NavBar
