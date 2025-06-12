import express from "express"
import { getFiles, updateFiles } from "../../../handlers/projects/topics/file.js"

const router = express.Router({ mergeParams: true })

// 3.3.2 GET Files (Header) Service
router.get("/", getFiles
  /*
    #swagger.summary = "3.3.2 GET Files (Header) Service"
    #swagger.tags = ["File"]
  */
)

// 3.3.3 PUT Files (Header) Service
router.put("/", updateFiles
  /*
    #swagger.summary = "3.3.3 PUT Files (Header) Service"
    #swagger.tags = ["File"]
  */
)

export default router
