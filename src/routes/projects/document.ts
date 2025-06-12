import express from "express"
import {
  addDocument,
  getDocumentByGUID,
  getDocuments
} from "../../handlers/projects/document.js"

const router = express.Router({ mergeParams: true })

// 3.8.1 GET Documents Service
router.get("/", getDocuments
  /*
    #swagger.summary = "3.8.1 GET Documents Service"
    #swagger.tags = ["Document"]
  */
)

// 3.8.2 POST Document Service
router.post("/", addDocument
  /*
    #swagger.summary = "3.8.2 POST Document Service"
    #swagger.tags = ["Document"]
  */
)

// 3.8.3 GET Document Service
router.get("/:document_guid", getDocumentByGUID
  /*
    #swagger.summary = "3.8.3 GET Document Service"
    #swagger.tags = ["Document"]
  */
)

export default router
