import express from "express";
import loginUser from "../Controller/userLogin.js";
import adminLogin from "../Controller/adminLogin.js";
import getUserdata from "../Controller/getUserdata.js";
import insertTaskData from "../Controller/insertUserDetails.js";

const router=express.Router();
router.post('/login',loginUser);
router.post('/adminlogin',adminLogin)
router.get('/getdata',getUserdata)
router.post('/insertdata',insertTaskData)
export default router;