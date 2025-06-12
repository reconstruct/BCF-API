import express from "express"

const router = express.Router({ mergeParams: true })

// 3.5.1 GET Viewpoints Service
router.get("/", (req, res) => {
  res.send("GET Viewpoints")
})

// 3.5.2 POST Viewpoint Service
router.post("/", (req, res) => {
  res.send("POST Viewpoint")
})

// 3.5.3 GET Viewpoint Service
router.get("/:viewpoint_guid", (req, res) => {
  res.send("GET Viewpoint")
})

// 3.5.4 GET Viewpoint Snapshot Service
router.get("/:viewpoint_guid/snapshot", (req, res) => {
  res.send("GET Viewpoint Snapshot")
})

// 3.5.5 GET Viewpoint Bitmap Service
router.get("/:viewpoint_guid/bitmap/:bitmap_guid", (req, res) => {
  res.send("GET Viewpoint Bitmap")
})

// 3.5.6 GET Selected Components Service
router.get("/:viewpoint_guid/selection", (req, res) => {
  res.send("GET Selected Components")
})

// 3.5.7 GET Colored Components Service
router.get("/:viewpoint_guid/coloring", (req, res) => {
  res.send("GET Colored Components")
})

// 3.5.8 GET Visibility of Components Service
router.get("/:viewpoint_guid/visibility", (req, res) => {
  res.send("GET Visibility of Components")
})

// 3.5.9 DELETE Viewpoint Service
router.delete("/:viewpoint_guid", (req, res) => {
  res.send("DELETE Viewpoint")
})

export default router
