import express from "express"

const router = express.Router({ mergeParams: true })

// 3.3.1 GET Project Files Information Service
router.get("/", (req, res) => {
  res.send("GET Files")
})

export default router
