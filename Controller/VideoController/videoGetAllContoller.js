import Video from "../../Models/video.js"

export const videoGetAllController=async(req,res)=>{
    try {
        
        const videos=await Video.find()
        if(!videos) return res.send('video not Found!')
    
            return res.json({
                data:videos,
                status:true
            })
    } catch (error) {
        return res.json({
            data:error
        })
        
    }

}