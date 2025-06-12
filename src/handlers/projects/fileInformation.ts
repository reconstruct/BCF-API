import { Request, Response } from "express"

export const getFilesInformation = async (req: Request, res: Response) => {
  return res.send("GET Files information")
}
