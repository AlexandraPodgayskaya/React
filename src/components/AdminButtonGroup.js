import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import CreateCertificate from '../components/modals/CreateCertificate'

function AdminButtonGroup() {
    const [editVisable, setEditVisable] = useState(false)
    return (
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
            <CreateCertificate show={editVisable} onHide={() => setEditVisable(false)} />
        </ButtonGroup>
    )
}

export default AdminButtonGroup
