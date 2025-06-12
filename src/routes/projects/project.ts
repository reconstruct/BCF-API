import express from "express"

const router = express.Router({ mergeParams: true })

// 3.1.1 GET Projects Service
router.get("/", (req, res) => {
  res.send("GET Projects")
})

// 3.1.2 GET Project Service
router.get("/:project_guid", (req, res) => {
  res.send("GET Project")
})

// 3.1.3 PUT Project Service
router.put("/:project_guid", (req, res) => {
  res.send("PUT Project")
})

// 3.1.4 GET Project Extension Service
router.get("/:project_guid/extensions", (req, res) => {
  res.send("GET Project Extension")
})

export default router
