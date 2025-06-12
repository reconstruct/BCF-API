// eslint-disable
const dotenv = require("dotenv")

// swagger auto gen; generates a swagger output file
const swaggerAutogen = require("swagger-autogen")

dotenv.config()
const PORT = process.env.PORT || 8080
const outputFile = "./src/swagger-output.json" // name of the output file
const endpointsFiles = ["./src/routes/index.ts"] // where we define our routes

const URL_PREFIX = "/bcf/3.0"

const config = {
  info: {
    title: "Reconstruct BCF API",
    description: "Reconstruct's API implementation of the BCF standard v3.0. See our internal docs for more information.",
  },
  host: `localhost:${PORT}`,
  basePath: `${URL_PREFIX}`,
  servers: [
    {
      url: `http://localhost:${PORT}${URL_PREFIX}`,
      description: "Local server"
    }
  ],
  schemes: ["http"],
}

Promise.resolve(swaggerAutogen(({openapi: "3.0.0"}))(outputFile, endpointsFiles, config))
