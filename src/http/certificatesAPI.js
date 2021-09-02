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