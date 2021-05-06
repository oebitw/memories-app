'use strict';

//////////////////
//// IMPORT /////
////////////////

import express from 'express';

//////////////////////////
///// Setup Router //////
////////////////////////

const router=express.Router();

import { signin, signup } from "../controllers/user.js";

//////////////////////
/////// Routes //////
////////////////////

router.post("/signin", signin);
router.post("/signup", signup);




export default router;