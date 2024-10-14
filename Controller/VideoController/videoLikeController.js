import Video from "../../Models/video.js";

export const videoLikeController=async(req,res)=>{
    const videoId=req.body.id;
    const userId=req.user.payload?._id


    try {
        const video=await Video.findOne({_id:videoId})

        if(!video.likes.includes(userId)){
            if(video.dislikes.includes(userId)){

                await  video.updateOne({$pull:{dislikes:userId}})
            }
          await  video.updateOne({$push:{likes:userId}})
          
          res.json({status:true,message:" video like succesfully"})
        }
        else{
            await  video.updateOne({$pull:{likes:userId}})
            res.json({status:true,message:" video unlike succesfully"})
            
        }
        
    } catch (error) {
        res.send(error)
        
    }

}