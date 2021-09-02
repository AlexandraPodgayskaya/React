import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { createTag } from '../../http/certificatesAPI'

function CreateCertificate({ show, onHide }) {
    const [tag, setTag] = useState('')
    const saveTag = () => {
        createTag(tag).then(data => {
            setTag('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new certificate
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Enter name ..."}
                        value={tag}
                        onChange={event => setTag(event.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={saveTag}>Save</Button>
                <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateCertificate
