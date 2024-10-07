import Video from "../../Models/video.js"

export const videoDeleteController=async(req,res)=>{
    
    const {postId}=req.body
    
    try {
        const video=await Video.findOneAndDelete({_id:postId})
        if(!video) return res.send('something wrong')
        return res.json({data:video,status:'delete Succesfully'})
        
    } catch (error) {
        console.log(error)
        
    }
}