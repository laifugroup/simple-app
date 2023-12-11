// pages/login.js

import { useState } from 'react'
import { useRouter } from 'next/router'
import api from '@/commons/utils/api'

import useSWR from "swr"
import fetcher from "@/commons/utils/fetcher"

type LoginReq = {
    username: string
    password: string
}
type LoginRsp = {
    username: string
    token: string
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getStaticProps() {
    const res = await fetch(baseUrl + '/api/user/login/init')
    const body = await res.json()
    return {
        props: {
            initialData: body
        }
    }
}

const fetchData = async () => {
    // 发起登录请求
    const rsp = await api.login()
    //api.refresh()
    console.log(JSON.stringify(rsp))
    return rsp
}


export default function LoginPage({ initialData }: { initialData: LoginReq }) {
    const router = useRouter()
    const [form, setForm] = useState(initialData)

    const handleSubmit = async () => {
        const res = await api.login()
        const body = await res.json()
        console.log('handle=' + JSON.stringify(body))
        if (body) {
            localStorage.setItem('token', body.token)
            router.push('/user/info')
        }
    }

    return (
        <main >
            <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
            />
            <br />

            <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <br />

            <button onClick={handleSubmit} >登录</button>
        </main>
    )
}