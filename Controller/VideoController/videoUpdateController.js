import Video from "../../Models/video.js"

export const videoUpadateController=async(req,res)=>{
const video_id=req.params.id
const {id}=req.body
    try {
        const video= await Video.findOne({_id:video_id})
        if(!video.veiws.includes(id)){
            await video.updateOne({$push:{veiws:id}})
            return res.json({
                status:false,
                message:'video Watched Succefully'
            })
        }

        return res.json({
            status:false,
            message:'video has already watched'
        })
        
    } catch (error) {
        return res.json({
            status:false,
            message:error
        })
        
    }
}