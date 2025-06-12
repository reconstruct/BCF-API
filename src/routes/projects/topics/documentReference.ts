import express from "express"
import {
  addDocumentReference,
  getDocumentReferenceByGUID,
  updateDocumentReferenceByGUID
} from "../../../handlers/projects/topics/documentReference.js"

const router = express.Router({ mergeParams: true })

// 3.7.1 GET Document References Service
router.get("/:document_guid", getDocumentReferenceByGUID
  /*
    #swagger.summary = "3.7.1 GET Document References Service"
    #swagger.tags = ["Document Reference"]
  */
)

// 3.7.2 POST Document Reference Service
router.post("/", addDocumentReference
  /*
    #swagger.summary = "3.7.2 POST Document Reference Service"
    #swagger.tags = ["Document Reference"]
  */
)

// 3.7.3 PUT Document Reference Service
router.put("/:document_guid", updateDocumentReferenceByGUID
  /*
    #swagger.summary = "3.7.3 PUT Document Reference Service"
    #swagger.tags = ["Document Reference"]
  */
)

export default router
