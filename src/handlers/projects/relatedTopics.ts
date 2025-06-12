import { Request, Response } from "express"

export const getRelatedTopics = async (req: Request, res: Response) => {
  return res.send("GET Related Topics")
}

export const updateRelatedTopics = async (req: Request, res: Response) => {
  return res.send("PUT Related Topics")
}
