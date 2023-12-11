// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type LoginRsp = {
  username: string
  token: string
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginRsp>
) {
  res.status(200).json({ username: 'zhangsan', token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2NvZGUiOiJNWTAwMDAwMDAwNSIsInVzZXJfaWQiOjUsInJvbGVzIjoiMDgiLCJleHAiOjE3MDIxOTY2NDV9.f41WyGzrCE0-YftwogeXXAcg1_LlByc3N2X6_WnEM6c' })
}
