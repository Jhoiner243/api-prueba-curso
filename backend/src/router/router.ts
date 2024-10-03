import { Router } from "express"
import {  POSTLogin } from "../controller/POST/POSTLogin"
import {  POSTregister} from "../controller/POST/POSTregister"
import {  GetLogin, updateLogin } from "../controller/GET/GetLogin"

export const router: Router = Router()

router.post("/login", POSTLogin)
router.post("/register", POSTregister)
router.post("/login/:id", updateLogin)
router.get("/login/:id", GetLogin)