import express from "express"
import {
  addComment,
  deleteCommentByGUID,
  getCommentByGUID,
  getComments,
  updateCommentByGUID
} from "../../handlers/projects/comment.js"

const router = express.Router({ mergeParams: true })

// 3.4.1 GET Comments Service
router.get("/", getComments
  /*
    #swagger.summary = "3.4.1 GET Comments Service"
    #swagger.tags = ["Comment"]
  */
)

// 3.4.2 POST Comment Service
router.post("/", addComment
  /*
    #swagger.summary = "3.4.2 POST Comment Service"
    #swagger.tags = ["Comment"]
  */
)

// 3.4.3 GET Comment Service
router.get("/:comment_guid", getCommentByGUID
  /*
    #swagger.summary = "3.4.3 GET Comment Service"
    #swagger.tags = ["Comment"]
  */
)

// 3.4.4 PUT Comment Service
router.put("/:comment_guid", updateCommentByGUID
  /*
    #swagger.summary = "3.4.4 PUT Comment Service"
    #swagger.tags = ["Comment"]
  */
)

// 3.4.5 DELETE Comment Service
router.delete("/:comment_guid", deleteCommentByGUID
  /*
    #swagger.summary = "3.4.5 DELETE Comment Service"
    #swagger.tags = ["Comment"]
  */
)

export default router
