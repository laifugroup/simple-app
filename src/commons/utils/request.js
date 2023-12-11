import { useState, useEffect } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : 'localhost'



export function useGet(url, params = {}, options = {}) {
    //query参数
    let requestUrl = url;
    // 将params转成查询字符串
    if (Object.keys(params).length) {
        requestUrl += '?' + new URLSearchParams(params);
    }
    const defaultOptions = {
        method: 'GET'
    }
    console.log("requestUrl=" + requestUrl)
    return useRequest(requestUrl, defaultOptions)
}


export function usePost(url, body = {}, options = {}) {
    const defaultOptions = {
        method: 'POST',
        body: body,
        ...options
    }
    return useRequest(url, defaultOptions)
}


export function useRequest(url, options = {}) {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    // const [data, setData] = useState({})

    const requestUrl = `${baseUrl}${url}`

    const defaultOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const token = localStorage.getItem('token')

    if (token) {
        defaultOptions.headers['Authorization'] = `Bearer ${token}`
    }

    const mergedOptions = {
        ...defaultOptions,
        ...options,
        url: requestUrl
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(requestUrl, mergedOptions)
                const json = await res.json()
                setData(json)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [mergedOptions, requestUrl])

    return {
        data,
        loading,
        error
    }

}




export default {
    useGet,
    usePost,
    Request
}