import express, { Application, json } from "express"
import cors from "cors"
import { router } from "./router/router"

export const server: Application = express()

const corsOptions = {
  origin: "*", // Puedes restringir esto a dominios específicos
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization"],
  exposedHeaders: ["Authorization"],
}

// Middleware
server.use(cors(corsOptions))
server.use(json()) // Analiza los cuerpos de las solicitudes como JSON
server.use("/api/v1", router)
