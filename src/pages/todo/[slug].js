import { useRouter } from 'next/router'

//http://localhost:3000/todo/aa.js
export default function Page() {
    const router = useRouter()
    return <p>Post: {router.query.slug}</p>
}