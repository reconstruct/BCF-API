import { Request, Response } from "express"

export const getViewpoints = async (req: Request, res: Response) => {
  return res.send("GET Viewpoints")
}

export const addViewpoint = async (req: Request, res: Response) => {
  return res.send("POST Viewpoint")
}

export const getViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("GET ViewpointByGUID")
}

export const getSnapshotFromViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("GET ViewpointSnapshotByViewpointGUID")
}

export const getBitmapByGUIDFromViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("GET ViewpointSnapshotBitmapFromViewpointGUID")
}

export const getSelectedComponentsFromViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("GET ViewpointSnapshotSelectedComponentsFromViewpointGUID")
}

export const getColoredComponentsFromViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("GET ViewpointSnapshotColoredComponentsFromViewpointGUID")
}

export const getVisibleComponentsFromViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("GET ViewpointSnapshotVisibleComponentsFromViewpointGUID")
}

export const deleteViewpointByGUID = async (req: Request, res: Response) => {
  return res.send("DELETE ViewpointSnapshotByGUID")
}
