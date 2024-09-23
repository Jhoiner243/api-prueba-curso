import type { Request, Response } from "express"

interface Data {
  name: string
}
export const PostSaludo = async (req: Request, res: Response) => {
  try {
    const { name }: Data = req.body

    res.status(200).json({
      message: `Saludo ${name}`,
    })
  } catch (error) {
    console.error(error)
  }
}
