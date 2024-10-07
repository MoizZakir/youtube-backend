import Video from "../../Models/video.js"
export const videoCreateController=async(req,res)=>{

    const {title,thumbnail,video,keywords}=req.body
    const {_id:authId}=req.user.payload
    try {
        
        if(!title ||!thumbnail ||!video ||!keywords)return res.send('require all feilds')
        
            //prepare data
        const videoData=await new Video({
            authId:authId,
            title:title,
    thumbnail:thumbnail,
    video:video,
    keywords:keywords,
            
    
        })
     // ready to send data
     
     const saveVideo=await videoData.save(videoData)
    
     if(saveVideo?.errors) return res.send('something wrong ...')
    
        res.json({
            data:saveVideo,
            status:true
        })
    } catch (error) {
        return res.json({
            data:error
        })
        
    }
    
     

    //check all fields



}