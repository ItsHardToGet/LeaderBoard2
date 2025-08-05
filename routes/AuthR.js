import {Login,Register,findAll,findone} from '../controllers/AuthControllers.js'
import express from "express";
const router=express.Router();
router.post("/signin",Login);   
router.post("/signup",Register);
router.get("/findall",findAll);
router.get("/findId/:id",findone);


export default router ;