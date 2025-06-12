import express from "express"

const router = express.Router({ mergeParams: true })

// 3.3.2 GET Files (Header) Service
router.get("/", (req, res) => {
  res.send("GET Files")
})

// 3.3.3 PUT Files (Header) Service
router.put("/", (req, res) => {
  res.send("PUT Files")
})

export default router
