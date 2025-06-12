import { Request, Response } from "express"

export const getDocumentReferenceByGUID = async (req: Request, res: Response) => {
  return res.send("GET Document Reference by GUID")
}

export const addDocumentReference = async (req: Request, res: Response) => {
  return res.send("POST Document Reference")
}

export const updateDocumentReferenceByGUID = async (req: Request, res: Response) => {
  return res.send("PUT Document Reference by GUID")
}
