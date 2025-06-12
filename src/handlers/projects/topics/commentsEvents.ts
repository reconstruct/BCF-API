import { Request, Response } from "express"

export const getCommentEvents = async (req: Request, res: Response) => {
  return res.send("GET Comment Events")
}
