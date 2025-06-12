import { Request, Response } from "express"

export const getProjects = async (req: Request, res: Response) => {
  return res.send("GET Projects")
}

export const getProjectByGUID = async (req: Request, res: Response) => {
  return res.send("GET Project")
}

export const updateProject = async (req: Request, res: Response) => {
  return res.send("PUT Project")
}

export const getProjectExtension = async (req: Request, res: Response) => {
  return res.send("GET Project Extension")
}
