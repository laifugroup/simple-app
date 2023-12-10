import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input } from "@nextui-org/react";
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


//http://localhost:3000/todo/detail
export default function Detail() {

  const router = useRouter()

  return (
    <main>
      <Button>todo Detail</Button>
      <p>Post: {router.query.id}</p>
    </main>
  )
}
