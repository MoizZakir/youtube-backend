
import Video from "../../Models/video.js";

export const videoIdGetController=async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    try {
        const video=await Video.findOne({_id:id})
        if(!video) return res.json({
            status:false,
            message:'video not found'
            
        })
         
        res.json({
    status:true,
            data:video
        })
    } catch (error) {
        console.log(error)
        res.json({
            status:false,
            data:error
        })
        
    }
}