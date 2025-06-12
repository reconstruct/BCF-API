import express from "express"
import {
  addTopic,
  deleteTopicByGUID,
  getBIMSnippetFromTopicByGUID,
  getTopicByGUID,
  getTopics,
  updateBIMSnippetFromTopicByGUID,
  updateTopic
} from "../../../handlers/projects/topics/topic.js"

const router = express.Router({ mergeParams: true })

// 3.2.1 GET Topics Service
router.get("/", getTopics
  /*
    #swagger.summary = "3.2.1 GET Topics Service"
    #swagger.tags = ["Topic"]
  */
)

// 3.2.2 POST Topic Service
router.post("/", addTopic
  /*
    #swagger.summary = "3.2.2 POST Topic Service"
    #swagger.tags = ["Topic"]
  */
)

// 3.2.3 GET Topic Service
router.get("/:topic_guid", getTopicByGUID
  /*
    #swagger.summary = "3.2.3 GET Topic Service"
    #swagger.tags = ["Topic"]
  */
)

// 3.2.4 PUT Topic Service
router.put("/:topic_guid", updateTopic
  /*
    #swagger.summary = "3.2.4 PUT Topic Service"
    #swagger.tags = ["Topic"]
  */
)

// 3.2.5 DELETE Topic Service
router.delete("/:topic_guid", deleteTopicByGUID
  /*
    #swagger.summary = "3.2.5 DELETE Topic Service"
    #swagger.tags = ["Topic"]
  */
)

// 3.2.6 GET Topic BIM Snippet Service
router.get("/:topic_guid/snippet", getBIMSnippetFromTopicByGUID
  /*
    #swagger.summary = "3.2.6 GET Topic BIM Snippet Service"
    #swagger.tags = ["Topic"]
  */
)

// 3.2.7 PUT Topic BIM Snippet Service
router.put("/:topic_guid/snippet", updateBIMSnippetFromTopicByGUID
  /*
    #swagger.summary = "3.2.7 PUT Topic BIM Snippet Service"
    #swagger.tags = ["Topic"]
  */
)

export default router
