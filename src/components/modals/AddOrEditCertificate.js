import React, { useContext, useState, useEffect } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import { Context } from '../../context'
import { saveCertificate, updateCertificate } from '../../http/certificatesAPI'
import { WithContext as ReactTags } from 'react-tag-input';
import NewTags from '../NewTags'

function AddOrEditCertificate({ show, onHide, certificate, tagList }) {
    const Keys = {
        TAB: 9,
        SPACE: 32,
        COMMA: 188,
    };
    const { reboot, setReboot } = useContext(Context)
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [duration, setDuration] = useState(null)
    const [tags, setTags] = useState(null)
    useEffect(() => {
        setTags(tagList)
        console.log(tags)
    }, [tagList])

    const saveItem = () => {
        console.log ("Save Item " + tags)
        saveCertificate(name, description, price, duration, tags).then(data => {
            setReboot(!reboot)
            onHide()
        })
    }

    const updateItem = () => {
        console.log ("Update Item " + tags)
        updateCertificate(name, description, price, duration, certificate.id, tags).then(data => {
            setReboot(!reboot)
            onHide()
        })
    }

    const deleteTag = (i) => {
        console.log("Delete tag")
        console.log(i)
        setTags(tags.filter((tag, index) => index !== i))
        console.log(tags)

    }

    const addTag = (tag) => {
        console.log("Add")
        console.log(tags)
        if (tags) {
            setTags([...tags, tag])
        } else {
            setTags([tag])
        }
        console.log(tags)
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
                <Modal.Title style={{ fontSize: "18px" }}>{certificate ? 'Edit certificate with ID = ' : 'Add new certificate'}{certificate && certificate.id}</Modal.Title>
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
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Tags
                        </Form.Label>
                        <Col sm="10">
                            <ReactTags
                                tags={tags}
                                delimiters={[Keys.TAB, Keys.SPACE, Keys.COMMA]}
                                handleDelete={deleteTag}
                                handleAddition={addTag}
                                labelField={'text'}
                                inputFieldPosition="top" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer >
                <div className="d-block mx-auto">
                    <Button
                        style={{ width: "80px", marginRight: "3px" }}
                        variant="primary"
                        onClick={certificate ? updateItem : saveItem}
                    >
                        Save
                    </Button>
                    <Button style={{ width: "80px" }} variant="secondary" onClick={onHide}>Cancel</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default AddOrEditCertificate
