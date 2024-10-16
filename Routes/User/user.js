import express from "express";
import { verify } from "../../middleware/token.js";
import { followController } from "../../Controller/User/folllowController.js";
import { unFollowController } from "../../Controller/User/UnfollowController.js";
import { userGetController } from "../../Controller/User/userGetcontroller.js";

const UserRoute=express.Router()

UserRoute.put('/follow',verify,followController)
UserRoute.put('/unfollow',verify,unFollowController)
UserRoute.get('/:id',userGetController)

export default UserRoute