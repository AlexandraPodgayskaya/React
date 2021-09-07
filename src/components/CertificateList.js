import React, { useContext, useState } from 'react'
import { CertificatesContext, Context } from '../context'
import CertificateItem from '../components/CertificateItem'
import { Container, Table } from 'react-bootstrap'

function CertificateList() {
    const { isAdmin } = useContext(Context)
    const { certificates } = useContext(CertificatesContext)

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
                        {isAdmin === 'true' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {certificates.map((certificate, index) =>
                        <CertificateItem key={index} index={index} certificate={certificate} />
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default CertificateList
