import express from "express";
import { videoCreateController } from "../../Controller/VideoController/videoCreate.js";
import { verify, verifyAuth } from "../../middleware/token.js";
import { videoGetAllController } from "../../Controller/VideoController/videoGetAllContoller.js";
import { videoSingleGetController } from "../../Controller/VideoController/videoSingleGetController.js";
import { videoDeleteController } from "../../Controller/VideoController/videoDeleteController.js";

const VideoRoute=express.Router();
VideoRoute.post('/create',verify,videoCreateController)
VideoRoute.get('/all',videoGetAllController)
VideoRoute.get('/',videoSingleGetController)
VideoRoute.delete('/:id',verifyAuth,videoDeleteController)

export default VideoRoute