import express from "express"
import { getCommentEvents } from "../../../handlers/projects/topics/commentsEvents.js"

const router = express.Router({ mergeParams: true })

// 3.10.2 GET Comment Events Service
router.get("/", getCommentEvents
  /*
    #swagger.summary = "3.10.2 GET Comment Events Service"
    #swagger.tags = ["Comment Events"]
  */
)

export default router
