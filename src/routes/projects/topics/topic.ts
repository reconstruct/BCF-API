import express from "express"

const router = express.Router({ mergeParams: true })

// 3.2.1 GET Topics Service
router.get("/", (req, res) => {
  res.send("GET Topics")
})

// 3.2.2 POST Topic Service
router.post("/", (req, res) => {
  res.send("POST Topic")
})

// 3.2.3 GET Topic Service
router.get("/:topic_guid", (req, res) => {
  res.send("GET Topic")
})

// 3.2.4 PUT Topic Service
router.put("/:topic_guid", (req, res) => {
  res.send("PUT Topic")
})

// 3.2.5 DELETE Topic Service
router.delete("/:topic_guid", (req, res) => {
  res.send("DELETE Topic")
})

// 3.2.6 GET Topic BIM Snippet Service
router.get("/:topic_guid/snippet", (req, res) => {
  res.send("GET Topic BIM Snippet")
})

// 3.2.7 PUT Topic BIM Snippet Service
router.put("/:topic_guid/snippet", (req, res) => {
  res.send("PUT Topic BIM Snippet")
})

export default router
