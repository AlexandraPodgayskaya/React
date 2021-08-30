import React from 'react'
import { Container, Card, Form } from 'react-bootstrap'

function Auth() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Login</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="E-mail"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                    />
                </Form>
            </Card>
        </Container>
    )
}

export default Auth




