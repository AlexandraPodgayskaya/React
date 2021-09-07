import React, { useState, useEffect, useContext } from 'react'
import CertificateList from '../components/CertificateList'
import { fetchCertificates } from '../http/certificatesAPI'
import { CertificatesContext } from '../context';
import { Context } from '../context';

function Shop() {

    const {reboot, setReboot} = useContext(Context)
    const [certificates, setCertificates] = useState([])
    const [count, setCount] = useState()
    
    useEffect(() => {
        fetchCertificates().then(data => {
            setCertificates(data.pagePositions)
            setCount(data.totalNumberPositions)
        })
    }, [reboot])

    return (
        <CertificatesContext.Provider value={{
            certificates,
            setCertificates,
        }}>
            <CertificateList />
        </CertificatesContext.Provider>
    )
}

export default Shop
