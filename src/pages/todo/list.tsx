import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input } from "@nextui-org/react"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


//http://localhost:3000/todo/list


export default function TodoList() {

  return (
    <main>
      <Button>Todo List</Button>

      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todo/about">About Us</Link>
          </li>
          <li>
            <Link href={`/todo/detail/${encodeURIComponent(1)}`}>
              details
            </Link>
          </li>

          <li >
            <Link
              href={{
                pathname: '/todo/detail/[id]',
                query: { id: 12 },
              }}
            >
              details 2
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}
