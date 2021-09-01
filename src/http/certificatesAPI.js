import { $authHost, $host } from "./index";

export const createCertificate = async (email, password) => {
    const {data} = await $authHost.post('gift-certificates', {email, password})
    localStorage.setItem('token', data.token)
    return data
}

export const fetchCertificates = async () => {
    const {data} = await $host.get('gift-certificates')
    return data
}