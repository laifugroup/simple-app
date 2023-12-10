import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })
type Data = {
    name: string
}


const baseUrl = process.env.NEXT_PUBLIC_API_URL
const secretKey = process.env.SECRET_KEY

//初始获取参数 服务端渲染
// export async function getServerSideProps() {
//   const res = await fetch(baseUrl + '/api/hello')
//   const body = await res.json()
//   return {
//     props: {
//       initialData: body
//     }
//   }
// }

//静态
export async function getStaticProps() {
    //const res = await fetch(baseUrl + '/api/hello')
    //const body = await res.json()
    return {
        props: {
            initialData: {} as Data
        }
    }
}



//点击获取值 initialData初始化数据-SSR
export default function Hello({ initialData }: { initialData: Data }) {

    const [data, setData] = useState(initialData)


    useEffect(() => {
        console.log("useEffect baseUrl=" + baseUrl);
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    const handleClick = async () => {
        // 发送请求
        console.log("handleClick baseUrl=" + baseUrl)
        fetchData2()
    }


    const fetchData = async () => {
        const res = await fetch(baseUrl + '/api/hello')
        const body = await res.json()
        body.name = "拉取初始化数据成功."
        setData({
            ...body,
        })
    }

    const fetchData2 = async () => {
        const res = await fetch('api/hello')
        const body = await res.json()
        body.name = "点击提交数据成功."
        setData({
            ...body,
        })
    }


    return (
        <main>
            <Button onClick={handleClick}>点击更新数据</Button>
            <div>
                获取数据: {data && data.name}
            </div>
        </main>
    )
}
