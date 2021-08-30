import React from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'

function Auth() {
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
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Password"
                        />
                    </Form>
                    <Button className="mt-3" variant="primary">Login</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Auth




