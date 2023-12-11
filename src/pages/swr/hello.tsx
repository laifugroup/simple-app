import useSWR from 'swr'
import api from '@/commons/utils/api'
const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Profile() {
    // const { data, error, isLoading } = useSWR('/api/user/login/init', fetcher)
    const { data, error, isLoading } = api.useProfile()

    if (error) return (<div>failed to load </div>)
    if (isLoading) return <div>loading...</div>

    // render data
    return (<div>hello {data.username} !</div>)
}