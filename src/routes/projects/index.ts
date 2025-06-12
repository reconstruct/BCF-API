import express from "express"

import commentRoutes from "./comment.js"
import documentRoutes from "./document.js"
import fileInformationRoutes from "./fileInformation.js"
import projectRoutes from "./project.js"
import topicRoutes from "./topics/index.js"
import relatedTopicsRoutes from "./relatedTopics.js"

const app = express.Router({ mergeParams: true })

app.use("/", projectRoutes)

app.use("/:project_guid/comments", commentRoutes)
app.use("/:project_guid/documents", documentRoutes)
app.use("/:project_guid/files_information", fileInformationRoutes)
app.use("/:project_guid/topics", topicRoutes)
app.use("/:project_guid/related_topics", relatedTopicsRoutes)

export default app
