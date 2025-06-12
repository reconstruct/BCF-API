import express from "express"

const router = express.Router({ mergeParams: true })

// 3.6.1 GET Related Topics Service
router.get("/", (req, res) => {
  res.send("GET Related Topics")
})

// 3.6.2 PUT Related Topics Service
router.put("/", (req, res) => {
  res.send("PUT Related Topics")
})

export default router
