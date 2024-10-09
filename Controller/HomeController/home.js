import Video from "../../Models/video.js"

export const homeController=async (req,res)=>{
    try {
        const video=await Video.find();
        console.log(video)
        if(!video) res.json({status:false,message:'No video found!'})
            return res.json({
        status:true,
        data:video
        })
    } catch (error) {
        return res.json({
            status:false,
            message:error
        })
    }
    
}