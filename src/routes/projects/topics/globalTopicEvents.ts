import express from "express"
import { getCommentsEventsFromTopic } from "../../../handlers/projects/topics/globalTopicEvents.js"

const router = express.Router({ mergeParams: true })

// 3.9.1 GET Topics Events Service
router.get("/", getCommentsEventsFromTopic
  /*
    #swagger.summary = "3.9.1 GET Topics Events Service"
    #swagger.tags = ["Topic Events"]
  */
)

export default router
