import { $authHost, $host } from "./index";

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return data
}

export const check = async () => {
    const response = await $authHost.post('auth/login')
    return response
}
