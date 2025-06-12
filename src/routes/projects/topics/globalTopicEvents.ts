import express from "express"

const router = express.Router({ mergeParams: true })

// 3.9.1 GET Topics Events Service
router.get("/", (req, res) => {
  res.send("GET Topics")
})

export default router
