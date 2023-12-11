


//const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, options)

import useSWR from "swr"
import fetcher from "@/commons/utils/fetcher"

//const loginRequest = useSWR('/api/user/login', fetcher, {})

const fetcher2 = (url: string) => fetch(url).then(r => r.json())
export function useProfile() {

    const { data, error, isLoading } = useSWR('/api/user/login/init', fetcher2)
    return {
        data,
        error,
        isLoading
    }
}

function loginLoad() {
    return useSWR('/api/user/login/init', fetcher2, {})
}



async function login() {
    //ok
    //return fetch('/api/user/login')
    //ok
    return fetcher('/api/user/login')
    //no
    // return useSWR('/api/user/login', fetcher2, {})
}

async function info() {
    return fetcher('/api/user/info')
}


function refresh() {
    return useSWR('/api/user/refresh', fetcher2, {})
}

export default {
    login, refresh, useProfile, loginLoad, info
}
