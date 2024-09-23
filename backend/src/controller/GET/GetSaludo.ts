import type { Request, Response } from "express"

export const GetSaludo = (req: Request, res: Response): void => {
  res.status(200).json({
    message: "Hola, mundo!",
  })
}
