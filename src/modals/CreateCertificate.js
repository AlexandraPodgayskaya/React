import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

function CreateCertificate({ show, onHide }) {
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
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide}>Save</Button>
                <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateCertificate
