import { Request, Response } from "express"

export const getFiles = async (req: Request, res: Response) => {
  return res.send("GET Files")
}

export const updateFiles = async (req: Request, res: Response) => {
  return res.send("PUT Files")
}
