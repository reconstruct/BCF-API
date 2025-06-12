import express from "express"
import {
  getProjectByGUID,
  getProjectExtension,
  getProjects,
  updateProject
} from "../../handlers/projects/project.js"

const router = express.Router({ mergeParams: true })

// 3.1.1 GET Projects Service
router.get("/", getProjects
  /*
    #swagger.summary = "3.1.1 GET Projects Service"
    #swagger.tags = ["Project"]
  */
)

// 3.1.2 GET Project Service
router.get("/:project_guid", getProjectByGUID
  /*
    #swagger.summary = "3.1.2 GET Project Service"
    #swagger.tags = ["Project"]
  */
)

// 3.1.3 PUT Project Service
router.put("/:project_guid", updateProject
  /*
    #swagger.summary = "3.1.3 PUT Project Service"
    #swagger.tags = ["Project"]
  */
)

// 3.1.4 GET Project Extension Service
router.get("/:project_guid/extensions", getProjectExtension
  /*
    #swagger.summary = "3.1.4 GET Project Extension Service"
    #swagger.tags = ["Project"]
  */
)

export default router
