import express from "express"
import {
  addViewpoint,
  deleteViewpointByGUID,
  getBitmapByGUIDFromViewpointByGUID,
  getColoredComponentsFromViewpointByGUID,
  getSelectedComponentsFromViewpointByGUID,
  getSnapshotFromViewpointByGUID,
  getViewpointByGUID,
  getViewpoints,
  getVisibleComponentsFromViewpointByGUID
} from "../../../handlers/projects/topics/viewpoint.js"

const router = express.Router({ mergeParams: true })

// 3.5.1 GET Viewpoints Service
router.get("/", getViewpoints
  /*
    #swagger.summary = "3.5.1 GET Viewpoints Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.2 POST Viewpoint Service
router.post("/", addViewpoint
  /*
    #swagger.summary = "3.5.2 POST Viewpoint Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.3 GET Viewpoint Service
router.get("/:viewpoint_guid", getViewpointByGUID
  /*
    #swagger.summary = "3.5.3 GET Viewpoint Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.4 GET Viewpoint Snapshot Service
router.get("/:viewpoint_guid/snapshot", getSnapshotFromViewpointByGUID
  /*
    #swagger.summary = "3.5.4 GET Viewpoint Snapshot Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.5 GET Viewpoint Bitmap Service
router.get("/:viewpoint_guid/bitmap/:bitmap_guid", getBitmapByGUIDFromViewpointByGUID
  /*
    #swagger.summary = "3.5.5 GET Viewpoint Bitmap Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.6 GET Selected Components Service
router.get("/:viewpoint_guid/selection", getSelectedComponentsFromViewpointByGUID
  /*
    #swagger.summary = "3.5.6 GET Selected Components Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.7 GET Colored Components Service
router.get("/:viewpoint_guid/coloring", getColoredComponentsFromViewpointByGUID
  /*
    #swagger.summary = "3.5.7 GET Colored Components Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.8 GET Visibility of Components Service
router.get("/:viewpoint_guid/visibility", getVisibleComponentsFromViewpointByGUID
  /*
    #swagger.summary = "3.5.8 GET Visibility of Components Service"
    #swagger.tags = ["Viewpoint"]
  */
)

// 3.5.9 DELETE Viewpoint Service
router.delete("/:viewpoint_guid", deleteViewpointByGUID
  /*
    #swagger.summary = "3.5.9 DELETE Viewpoint Service"
    #swagger.tags = ["Viewpoint"]
  */
)

export default router
