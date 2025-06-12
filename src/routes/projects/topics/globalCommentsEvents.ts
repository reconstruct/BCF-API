import express from "express"

const router = express.Router({ mergeParams: true })

// 3.10.1 GET Comment Events Service
// Refers to the entire list of comment events across all topics
router.get("/", (req, res) => {
  res.send("GET Comment Events")
})

export default router
