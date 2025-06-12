import { Request, Response } from "express"

export const getComments = (req: Request, res: Response) => {
  return res.send("GET Comments")
}

export const addComment = async (req: Request, res: Response) => {
  return res.send("POST Comment")
}

export const getCommentByGUID = async (req: Request, res: Response) => {
  return res.send("GET Comment by GUID")
}

export const updateCommentByGUID = async (req: Request, res: Response) => {
  return res.send("PUT Comment by GUID")
}

export const deleteCommentByGUID = async (req: Request, res: Response) => {
  return res.send("DELETE Comment by GUID")
}
