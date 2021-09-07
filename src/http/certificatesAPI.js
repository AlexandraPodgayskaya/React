import { $authHost, $host } from "./index";

export const createCertificate = async (email, password) => {
    const { data } = await $authHost.post('gift-certificates', { email, password })
    return data
}

export const createTag = async (name) => {
    const { data } = await $authHost.post('tags', { name })
    return data
}

export const fetchCertificates = async (number, size) => {
    const { data } = await $host.get('gift-certificates', {
        params: {
            number, size
        }
    })
    return data
}

export const deleteCertificate = async (id) => {
    const { data } = await $authHost.delete('gift-certificates/' + id)
    return data
}


export const saveCertificate = async (name, description, price, duration) => {
    const { data } = await $authHost.post('gift-certificates', { name, description, price, duration })
    return data
}