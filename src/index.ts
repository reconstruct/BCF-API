import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import swaggerConfig from "./swagger-output.json" assert {type:"json"}
import { requestLogger, errorLogger } from "./logger/index.js"

import { connectToMongoDB } from "@reconstruct/data-abstraction-layer"

import swaggerUi from "swagger-ui-express"

import routes from "./routes/index.js"

dotenv.config()
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI

const URL_PREFIX = "/bcf/3.0"

if (!MONGODB_URI) {
  console.error("[Error] No MongoDB URI specified, exiting application")
  process.exit(1)
}

const corsOptions = {
  origin: process.env.CORS_DOMAIN,
  credentials: true,
  optionSuccessStatus: 200,
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use(requestLogger)
app.use(URL_PREFIX, routes)

//error handler must be before any other error middleware and after all controllers
// app.use(Sentry.Handlers.errorHandler())

app.use(errorLogger)

if (process.env.SERVE_SWAGGER_UI_DOCS === "SERVE") {
  app.use("/docs", swaggerUi.serve)
  app.get("/docs", swaggerUi.setup(swaggerConfig))
}

start(MONGODB_URI)

async function start(mongoUri: string) {
  await connectToMongoDB(mongoUri)

  app.listen(PORT, () => {
    console.log(`Reconstruct BCF API Server is running at port ${PORT}`)
  })
}

export default app // for unit tests
