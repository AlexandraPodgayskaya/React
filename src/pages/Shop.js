import React, { useState, useEffect } from 'react'
import CertificateList from '../components/CertificateList'
import { fetchCertificates } from '../http/certificatesAPI'
import { CertificatesContext } from '../context';

function Shop() {

    const [certificates, setCertificates] = useState([])
    const [count, setCount] = useState()

    useEffect(() => {
        fetchCertificates().then(data => {
            setCertificates(data.pagePositions)
            setCount(data.totalNumberPositions)
        })
    }, [])

    return (
        <CertificatesContext.Provider value={{
            certificates,
            setCertificates
        }}>
            <CertificateList />
        </CertificatesContext.Provider>
    )
}

export default Shop
