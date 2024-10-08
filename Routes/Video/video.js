import express from "express";
import { videoCreateController } from "../../Controller/VideoController/videoCreate.js";
import { verify, verifyAuth } from "../../middleware/token.js";
import { videoGetAllController } from "../../Controller/VideoController/videoGetAllContoller.js";
import { videoSingleGetController } from "../../Controller/VideoController/videoSingleGetController.js";
import { videoDeleteController } from "../../Controller/VideoController/videoDeleteController.js";
import { videoLikeController } from "../../Controller/VideoController/videoLikeController.js";
import { videoDisLikeController } from "../../Controller/VideoController/videoDisLikeController.js";

const VideoRoute=express.Router();
VideoRoute.post('/create',verify,videoCreateController)
VideoRoute.get('/all',videoGetAllController)
VideoRoute.get('/',videoSingleGetController)
VideoRoute.delete('/:id',verifyAuth,videoDeleteController)
VideoRoute.put('/like/:id',verify,videoLikeController)
VideoRoute.put('/dislike/:id',verify,videoDisLikeController)

export default VideoRoute