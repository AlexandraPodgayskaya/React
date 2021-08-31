import React from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Brand className="m-auto" style={{ color: "grey",  fontWeight: 700 }}>2018, EXPEDIA Student</Navbar.Brand>
        </Navbar>
    )
}

export default Footer


