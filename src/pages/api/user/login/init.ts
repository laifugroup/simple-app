// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type LoginReq = {
  username: string
  password: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginReq>
) {
  res.status(200).json({ username: '张三1', password: '123123' })
}
