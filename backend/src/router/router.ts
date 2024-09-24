import { Router } from "express"
import {  POSTLogin } from "../controller/POST/POSTLogin"
import {  POSTregister} from "../controller/POST/POSTregister"

export const router: Router = Router()

router.post("/login", POSTLogin)
router.post("/register", POSTregister)
