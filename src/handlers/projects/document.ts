import { Request, Response } from "express"

export const getDocuments = async (req: Request, res: Response) => {
  return res.send("GET Documents")
}

export const addDocument = async (req: Request, res: Response) => {
  return res.send("POST Document")
}

export const getDocumentByGUID = async (req: Request, res: Response) => {
  return res.send("GET Document")
}
