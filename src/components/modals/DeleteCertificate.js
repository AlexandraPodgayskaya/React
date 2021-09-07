import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CertificatesContext } from '../../context'
import { deleteCertificate } from '../../http/certificatesAPI'

function DeleteCertificate({ show, onHide, certificateId }) {
    const { certificates, setCertificates } = useContext(CertificatesContext)
    const { isUpdated, setIsUpdated } = useContext(CertificatesContext)
    const deleteItem = () => {
        deleteCertificate(certificateId).then(() => {
            setIsUpdated(!isUpdated)
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
                <Modal.Title style={{ fontSize: "18px" }}>Delete confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you really want to delete certificate with id = {certificateId}?
            </Modal.Body>
            <Modal.Footer>
                <div className="d-block mx-auto">
                    <Button style={{ width: "80px", marginRight: "3px" }} variant="danger" onClick={deleteItem}>Yes</Button>
                    <Button style={{ width: "80px" }} variant="secondary" onClick={onHide}>Cancel</Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteCertificate
