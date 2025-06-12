import express from "express"

const statusRouter = express.Router()

statusRouter.get("/", (_req, res) => {
  /*  
    #swagger.requestBody = {
      required: false
    }
    #swagger.tags = ["Status"]
  */
  res.sendStatus(200)
})

export default statusRouter
