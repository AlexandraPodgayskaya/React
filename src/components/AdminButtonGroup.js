import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import AddOrEditCertificate from '../components/modals/AddOrEditCertificate'
import DeleteCertificate from '../components/modals/DeleteCertificate'

function AdminButtonGroup({ certificate }) {
    const [editVisable, setEditVisable] = useState(false)
    const [deleteVisable, setDeleteVisable] = useState(false)
    const [tagList, setTagList] = useState(certificate.tags)
    console.log(tagList)
    const newArr = tagList.map(
        item => { return { ...item, id: item.text } }
    )
    console.log (newArr)

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
            <Button
                style={{ background: "red" }}
                variant="secondary"
                onClick={() => setDeleteVisable(true)}
            >
                Delete
            </Button>
            <AddOrEditCertificate certificate={certificate} tagList={newArr} show={editVisable} onHide={() => setEditVisable(false)} />
            <DeleteCertificate show={deleteVisable} onHide={() => setDeleteVisable(false)} certificateId={certificate.id} />
        </ButtonGroup>
    )
}

export default AdminButtonGroup
