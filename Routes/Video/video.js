import express from "express";
import { videoCreateController } from "../../Controller/VideoController/videoCreate.js";
import { verify, verifyAuth } from "../../middleware/token.js";
import { videoGetAllController } from "../../Controller/VideoController/videoGetAllContoller.js";
import { videoSingleGetController } from "../../Controller/VideoController/videoSingleGetController.js";
import { videoDeleteController } from "../../Controller/VideoController/videoDeleteController.js";
import { videoLikeController } from "../../Controller/VideoController/videoLikeController.js";
import { videoDisLikeController } from "../../Controller/VideoController/videoDisLikeController.js";
import { videoIdGetController } from "../../Controller/VideoController/videoIdGetcontroller.js";
import { videoUpadateController } from "../../Controller/VideoController/videoUpdateController.js";

const VideoRoute=express.Router();
VideoRoute.post('/create',verify,videoCreateController)
VideoRoute.get('/all',videoGetAllController)
VideoRoute.get('/:id',videoIdGetController)
VideoRoute.get('/',videoSingleGetController)
VideoRoute.delete('/:id',verifyAuth,videoDeleteController)
VideoRoute.put('/like',verify,videoLikeController)
VideoRoute.put('/dislike',verify,videoDisLikeController)
VideoRoute.put('/:id',videoUpadateController)

export default VideoRoute