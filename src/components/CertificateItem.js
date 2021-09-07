import React, { useContext } from 'react'
import { Context } from '../context'
import AdminButtonGroup from '../components/AdminButtonGroup'

function CertificateItem({ certificate, index }) {
    const { isAdmin } = useContext(Context)
    return (
        <tr style={{ background: index % 2 === 0 ? "var(--bs-gray-200)" : "lightgray" }}>
            <td>{certificate.createDate}</td>
            <td>{certificate.name}</td>
            <td>{certificate.tags.map(tag => tag.name + " ")}</td>
            <td>{certificate.description}</td>
            <td>{certificate.price}</td>
            {isAdmin === 'true' &&
                <td>
                    <AdminButtonGroup certificate={certificate} />
                </td>}
        </tr>
    )
}

export default CertificateItem
