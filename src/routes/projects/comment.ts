import express from "express"

const router = express.Router({ mergeParams: true })

// 3.4.1 GET Comments Service
router.get("/", (req, res) => {
  res.send("GET Comments")
})

// 3.4.2 POST Comment Service
router.post("/", (req, res) => {
  res.send("POST Comment")
})

// 3.4.3 GET Comment Service
router.get("/:comment_guid", (req, res) => {
  res.send("GET Comment")
})

// 3.4.4 PUT Comment Service
router.put("/:comment_guid", (req, res) => {
  res.send("PUT Comment")
})

// 3.4.5 DELETE Comment Service
router.delete("/:comment_guid", (req, res) => {
  res.send("DELETE Comment")
})

export default router
