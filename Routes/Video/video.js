import express from "express";
import { videoCreateController } from "../../Controller/VideoController/videoCreate.js";
import { verify } from "../../middleware/token.js";
import { videoGetAllController } from "../../Controller/VideoController/videoGetAllContoller.js";
import { videoSingleGetController } from "../../Controller/VideoController/videoSingleGetController.js";

const VideoRoute=express.Router();
VideoRoute.post('/create',verify,videoCreateController)
VideoRoute.get('/all',videoGetAllController)
VideoRoute.get('/',videoSingleGetController)

export default VideoRoute