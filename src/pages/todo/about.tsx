import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })
//http://localhost:3000/todo/about
export default function About() {
  return (
    <Button>about me</Button>
  )
}
