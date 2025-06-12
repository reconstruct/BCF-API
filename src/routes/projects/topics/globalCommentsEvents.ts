import express from "express"
import { getCommentsEventsAllTopics } from "../../../handlers/projects/topics/globalCommentsEvents.js"

const router = express.Router({ mergeParams: true })

// 3.10.1 GET Comment Events Service
// Refers to the entire list of comment events across all topics
router.get("/", getCommentsEventsAllTopics
  /*
    #swagger.summary = "3.10.1 GET Comment Events Service"
    #swagger.tags = ["Comment Events"]
  */
)

export default router
