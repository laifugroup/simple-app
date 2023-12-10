import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })
// getStaticProps
export default function ServerError() {
  return (
    <Button>i an costom 500 page</Button>
  )
}
