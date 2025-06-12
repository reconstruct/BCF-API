import express from "express"

const router = express.Router({ mergeParams: true })

// 3.7.1 GET Document References Service
router.get("/:document_guid", (req, res) => {
  res.send("GET Document")
})

// 3.7.2 POST Document Reference Service
router.post("/", (req, res) => {
  res.send("POST Document")
})

// 3.7.3 PUT Document Reference Service
router.put("/:document_guid", (req, res) => {
  res.send("PUT Document")
})

export default router
