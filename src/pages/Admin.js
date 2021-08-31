import React, { useState } from 'react'
import { Container, Table, Button, ButtonGroup } from 'react-bootstrap'
import CreateCertificate from '../modals/CreateCertificate'

function Admin() {
    const giftCertificates = [{ id: 1, name: "Massage", description: "Body massage with aromatic oils in a relaxing envoironment", "price": "1500", "createDate": " 10.01.2015", "lastUpdateDate": " 10.01.2015", "tags": [{ "name": "gift" }, { "name": "massage" }] },
    { id: 2, name: "Massage2", description: "Body2 massage with aromatic oils in a relaxing envoironment", "price": "500", "createDate": " 10.01.2015", "lastUpdateDate": " 10.01.2015", "tags": [{ "name": "massage" }] },
    { id: 3, name: "Massage3", description: "Body massage with aromatic oils in a relaxing envoironment", "price": "1500", "createDate": " 10.01.2015", "lastUpdateDate": " 10.01.2015", "tags": [{ "name": "gift" }, { "name": "massage" }] },
    { id: 4, name: "Massage4", description: "Body2 massage with aromatic oils in a relaxing envoironment", "price": "500", "createDate": " 10.01.2015", "lastUpdateDate": " 10.01.2015", "tags": [{ "name": "massage" }] },
    { id: 5, name: "Massage5", description: "Body massage with aromatic oils in a relaxing envoironment", "price": "1500", "createDate": " 10.01.2015", "lastUpdateDate": " 10.01.2015", "tags": [{ "name": "gift" }, { "name": "massage" }] },]

    const isAdmin = true
    const [editVisable, setEditVisable] = useState(false)
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
                    {giftCertificates.map((giftCertificate, index) =>
                        <tr style={{ background: index % 2 === 0 ? "var(--bs-gray-200)" : "lightgray" }}>
                            <td>{giftCertificate.createDate}</td>
                            <td>{giftCertificate.name}</td>
                            <td>{giftCertificate.tags.map(tag => tag.name + " ")}</td>
                            <td>{giftCertificate.description}</td>
                            <td>{giftCertificate.price}</td>
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
