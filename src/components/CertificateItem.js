import React, { useContext, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { AuthContext } from '../context'
import CreateCertificate from '../components/modals/CreateCertificate'

function CertificateItem({ certificate, index }) {
    const { isAdmin } = useContext(AuthContext)
    const [editVisable, setEditVisable] = useState(false)
    return (
        <tr key={certificate.id} style={{ background: index % 2 === 0 ? "var(--bs-gray-200)" : "lightgray" }}>
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
            <CreateCertificate show={editVisable} onHide={() => setEditVisable(false)} />
        </tr>
    )
}

export default CertificateItem
