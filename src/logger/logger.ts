import * as dotenv from "dotenv"
import type {
  ErrorRequestHandler,
  Request,
  RequestHandler,
  Response,
} from "express"
import pinohttp from "pino-http"
import pino from "pino"

dotenv.config()

const loggerOptions = {
  serializers: {
    // NOTE: delete cookies to avoid sending sensitive information to CloudWatch/Datadog.
    req: pino.stdSerializers.wrapRequestSerializer(
      (r: pino.SerializedRequest) => {
        delete r.headers["cookie"]
        return r
      },
    ),
  },
  customLogLevel: function (req: Request, res: Response, err: any) {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return "warn"
    } else if (res.statusCode >= 500 || err) {
      return "error"
    }

    return process.env.LOG_MODE === "ALL" ||
      process.env.NODE_ENV === "development"
      ? "info"
      : "silent"
  },
  customErrorMessage: function (req: Request, res: Response, err: any) {
    err.message = res.statusMessage ?? err.message
    return err.message
  },
  customProps(req: Request, res: Response) {
    return {
      reconstructUser: {
        email:
          res.locals?.decodedAccessToken?.payload?.email ?? "not specified",
      },
    }
  },
  formatters: {
    level: (label: string) => {
      return { level: label.toUpperCase() }
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
}

const logger = pino.pino(loggerOptions)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const httplogger = pinohttp(loggerOptions)

const requestLogger: RequestHandler = (req, res, next) => {
  httplogger(req, res) // append the logger to all requests
  next()
}

const errorLogger: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).end("Internal Server Error")
  next(err)
}

export { logger, requestLogger, errorLogger }
