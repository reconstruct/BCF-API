import { Request, Response } from "express"

export const getTopics = async (req: Request, res: Response) => {
  return res.send("GET Topics")
}

export const addTopic = async (req: Request, res: Response) => {
  return res.send("POST Topic")
}

export const getTopicByGUID = async (req: Request, res: Response) => {
  return res.send("GET Topic by Guid")
}

export const updateTopic = async (req: Request, res: Response) => {
  return res.send("PUT Topic")
}

export const deleteTopicByGUID = async (req: Request, res: Response) => {
  return res.send("DELETE Topic")
}

export const getBIMSnippetFromTopicByGUID = async (req: Request, res: Response) => {
  return res.send("GET Topic BIM Snippet")
}

export const updateBIMSnippetFromTopicByGUID = async (req: Request, res: Response) => {
  return res.send("PUT Topic BIM Snippet")
}
