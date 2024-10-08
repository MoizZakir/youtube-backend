import express from "express";
import { verify } from "../../middleware/token.js";
import { followController } from "../../Controller/User/folllowController.js";
import { unFollowController } from "../../Controller/User/UnfollowController.js";

const UserRoute=express.Router()

UserRoute.put('/follow/:id',verify,followController)
UserRoute.put('/unfollow/:id',verify,unFollowController)

export default UserRoute