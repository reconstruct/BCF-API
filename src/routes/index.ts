import express from "express"

import projectRoutes from "./projects/index.js"
import statusRouter from "./status.js"

const app = express.Router({ mergeParams: true })

app.use("/projects", projectRoutes)
app.use("/status", statusRouter)

export default app
