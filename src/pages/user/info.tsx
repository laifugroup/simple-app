import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Input } from "@nextui-org/react";
import api from '@/commons/utils/api'

import React, { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const res = await api.info()
  const body = await res.json()
  return {
    props: {
      initialData: { ...body }
    }
  }
}




// getStaticProps
export default function UserInfoPage({ initialData }: { initialData: Info }) {
  const [data, setData] = useState(initialData)
  const info = async () => {
    const res = await api.info()
    const body = await res.json()
    body.nickName = 'Aa'
    setData({
      ...body,
    })
  }


  useEffect(() => {
    setTimeout(() => {
      info()
    }, 4000);
  }, []);

  return (
    <main>
      <Button>user info page</Button>
      <div>
        <div>hello,{data && data.nickName}</div>
      </div>
    </main>
  )
}
