import express from "express"
import {registerController,loginController,testController} from "../controllers/authController.js"
import { requireSignin } from "../middlewares/authMiddleware.js"
import { isAdmin } from "../middlewares/authMiddleware.js"

// router object
const router=express.Router()
router.post('/register',registerController)

// LOGIN
router.post('/login',loginController)

// test routes

router.get("/test",requireSignin,isAdmin,testController)
export default router