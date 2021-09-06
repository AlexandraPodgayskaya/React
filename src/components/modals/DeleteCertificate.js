import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CertificatesContext } from '../../context'
import { deleteCertificate } from '../../http/certificatesAPI'

function DeleteCertificate({ show, onHide, certificateId }) {
    const { certificates, setCertificates } = useContext(CertificatesContext)
    const deleteItem = () => {
        deleteCertificate(certificateId).then(data => {
            setCertificates(certificates.filter((item) => item.id !== certificateId));
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
            <Modal.Header closeButton>
                <Modal.Title>Delete confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you really want to delete certificate with id = {certificateId}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={deleteItem}>Yes</Button>
                <Button variant="primary" onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteCertificate
