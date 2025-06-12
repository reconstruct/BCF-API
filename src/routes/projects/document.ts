import express from "express"

const router = express.Router({ mergeParams: true })

// 3.8.1 GET Documents Service
router.get("/", (req, res) => {
  res.send("GET Documents")
})

// 3.8.2 POST Document Service
router.post("/", (req, res) => {
  res.send("POST Document")
})

// 3.8.3 GET Document Service
router.get("/:document_guid", (req, res) => {
  res.send("GET Document")
})

export default router
