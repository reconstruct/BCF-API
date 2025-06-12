import express from "express"

import topicRoutes from "./topic.js"
import globalCommentsEventsRoutes from "./globalCommentsEvents.js"
import commentsEventsRoutes from "./commentsEvents.js"
import documentReferenceRoutes from "./documentReference.js"
import fileRoutes from "./file.js"
import globalTopicEventsRoutes from "./globalTopicEvents.js"
import topicEventsRoutes from "./topicEvents.js"
import viewpointRoutes from "./viewpoint.js"

const app = express.Router({ mergeParams: true })

app.use("/", topicRoutes)
app.use("/comments/events", globalCommentsEventsRoutes)
app.use("/:topic_guid/comments/:comment_guid/events", commentsEventsRoutes)
app.use("/:topic_guid/document_references", documentReferenceRoutes)
app.use("/:topic_guid/files", fileRoutes)
app.use("/events", globalTopicEventsRoutes)
app.use("/:topic_guid/events", topicEventsRoutes)
app.use("/:topic_guid/viewpoints", viewpointRoutes)

export default app
