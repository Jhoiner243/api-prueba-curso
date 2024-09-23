import { Router } from "express"
import { GetSaludo } from "../controller/GET/GetSaludo"
import { PostSaludo } from "../controller/POST/PostSaludo"

export const router: Router = Router()

router.post("/saludo", PostSaludo)
router.get("/saludo", GetSaludo)
