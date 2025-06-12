import express from "express"

const router = express.Router({ mergeParams: true })

// 3.10.2 GET Comment Events Service
router.get("/", (req, res) => {
  res.send("GET Comment Events")
})

export default router
