import { Request, Response } from "express"

export const getTopicEvents = async (req: Request, res: Response) => {
  return res.send("GET Topic Events")
}
