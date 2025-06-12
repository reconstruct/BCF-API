import express from "express"
import { getTopicEvents } from "../../../handlers/projects/topics/topicEvents.js"

const router = express.Router({ mergeParams: true })

// 3.9.2 GET Topic Events Service
router.get("/", getTopicEvents
  /*
    #swagger.summary = "3.9.2 GET Topic Events Service"
    #swagger.tags = ["Topic Events"]
  */
)

export default router
