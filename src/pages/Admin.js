import React, { useState, useEffect } from 'react'
import { Container, Table, Button, ButtonGroup } from 'react-bootstrap'
import CreateCertificate from '../components/modals/CreateCertificate'
import { fetchCertificates } from '../http/certificatesAPI'
import Pages from '../components/Pages'

function Admin() {

    const isAdmin = true
    const [editVisable, setEditVisable] = useState(false)
    const [certificates, setCertificates] = useState([])
    const [count, setCount] = useState()
    useEffect(() => {
        fetchCertificates().then(data => {
            setCertificates(data.pagePositions)
            setCount(data.totalNumberPositions)
        })
    }, [])
    console.log(certificates)
    console.log(localStorage.getItem('token'))
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Table bordered style={{ borderColor: "black" }}>
                <thead>
                    <tr style={{ background: "#bcbcbc" }}>
                        <th>Datetime</th>
                        <th>Title</th>
                        <th>Tags</th>
                        <th>Description</th>
                        <th>Price</th>
                        {isAdmin && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {certificates.map((certificate, index) =>
                        <tr key={index} style={{ background: index % 2 === 0 ? "var(--bs-gray-200)" : "lightgray" }}>
                            <td>{certificate.createDate}</td>
                            <td>{certificate.name}</td>
                            <td>{certificate.tags.map(tag => tag.name + " ")}</td>
                            <td>{certificate.description}</td>
                            <td>{certificate.price}</td>
                            {isAdmin &&
                                <td>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button style={{ background: "blue" }} variant="secondary">View</Button>
                                        <Button
                                            style={{ background: "orange" }}
                                            variant="secondary"
                                            onClick={() => setEditVisable(true)}
                                        >
                                            Edit
                                        </Button>
                                        <Button style={{ background: "red" }} variant="secondary">Delete</Button>
                                    </ButtonGroup>
                                </td>}
                        </tr>
                    )}
                </tbody>
            </Table>
            <CreateCertificate show={editVisable} onHide={() => setEditVisable(false)} />
        </Container>
    )
}

export default Admin
