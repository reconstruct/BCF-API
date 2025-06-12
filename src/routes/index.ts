import express from "express"

import projectRoutes from "./projects/index.js"

const app = express.Router({ mergeParams: true })

app.use("/projects", projectRoutes)

export default app
