
const baseUrl = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : 'localhost'

const fetcher = (uri: string, method: string = 'GET', body: {} = {}, options: {} = {}) => {
    const url = `${baseUrl}${uri}`

    const defaultOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let token;
    if (typeof window === 'undefined') {
        // 读取token从服务端 session
    } else {
        token = localStorage.getItem('token');
    }
    if (token) {
        defaultOptions.headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }

    const mergedOptions = {
        ...defaultOptions,
        ...options,
        url: url
    }
    return fetch(url, mergedOptions)
}


export default fetcher

//const { data, error, isLoading, isValidating, mutate } = useSWR(key, fetcher, options)

