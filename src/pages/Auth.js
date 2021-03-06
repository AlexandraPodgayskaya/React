import React, { useState, useContext } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { login } from '../http/userAPI'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../context';

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setIsAuth, setIsAdmin } = useContext(Context)
    const history = useHistory()
    const signIn = async () => {
        login(email, password).then(data => {
            localStorage.setItem('email', data.email)
            localStorage.setItem('isAuth', true)
            localStorage.setItem('isAdmin', data.admin)
            setIsAdmin(JSON.stringify(data.admin))
            setIsAuth(true)
            history.push(SHOP_ROUTE)
        }).catch(e => { alert(e.response.data.errorMessage) })
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 500 }} className="text-center">
                <Card.Header><h3>Login</h3></Card.Header>
                <Card.Body>
                    <Form className="d-flex flex-column" style={{ padding: "10px 60px 40px 60px" }}>
                        <Form.Control
                            className="mt-3"
                            placeholder="E-mail"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            type="password"
                        />
                    </Form>
                    <Button className="mt-3" variant="primary" onClick={signIn}>Login</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Auth




