import React, { useContext, useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { Context } from '../../context'
import { saveCertificate } from '../../http/certificatesAPI'

function AddOrEditCertificate({ show, onHide, certificate }) {
    const { reboot, setReboot } = useContext(Context)
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [duration, setDuration] = useState(null)

    const saveItem = () => {
        saveCertificate(name, description, price, duration).then(data => {
            setReboot(!reboot)
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header style={{
                background: "#d3d3d340",
                height: "50px",
                color: "var(--bs-gray-500)"
            }}>
                <Modal.Title style={{ fontSize: "18px" }}>Add new certificate</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                defaultValue={certificate && certificate.name}
                                onChange={event => setName(event.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                as="textarea" rows={4}
                                defaultValue={certificate && certificate.description}
                                onChange={event => setDescription(event.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Duration
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                defaultValue={certificate && certificate.duration}
                                onChange={event => setDuration(event.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                defaultValue={certificate && certificate.price}
                                onChange={event => setPrice(event.target.value)} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer >
                <div className="d-block mx-auto">
                    <Button style={{ width: "80px", marginRight: "3px" }} variant="primary" onClick={saveItem}>Save</Button>
                    <Button style={{ width: "80px" }} variant="secondary" onClick={onHide}>Cancel</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOrEditCertificate
