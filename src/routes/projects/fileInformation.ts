import express from "express"
import { getFilesInformation } from "../../handlers/projects/fileInformation.js"

const router = express.Router({ mergeParams: true })

// 3.3.1 GET Project Files Information Service
router.get("/", getFilesInformation
  /*
    #swagger.summary = "3.3.1 GET Project Files Information Service"
    #swagger.tags = ["File Information"]
  */
)

export default router
