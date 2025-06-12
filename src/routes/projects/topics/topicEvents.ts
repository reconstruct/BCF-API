import express from "express"

const router = express.Router({ mergeParams: true })

// 3.9.2 GET Topic Events Service
router.get("/", (req, res) => {
  res.send("GET Topic Events")
})

export default router
