import express from "express"
import { getRelatedTopics, updateRelatedTopics } from "../../handlers/projects/relatedTopics.js"

const router = express.Router({ mergeParams: true })

// 3.6.1 GET Related Topics Service
router.get("/", getRelatedTopics
  /*
    #swagger.summary = "3.6.1 GET Related Topics Service"
    #swagger.tags = ["Related Topics"]
  */
)

// 3.6.2 PUT Related Topics Service
router.put("/", updateRelatedTopics
  /*
    #swagger.summary = "3.6.2 PUT Related Topics Service"
    #swagger.tags = ["Related Topics"]
  */
)

export default router
