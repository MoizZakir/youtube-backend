
import User from "../../Models/user.js"

export const userGetController=async(req,res)=>{
    const id=req.params.id
    try {
        const user=await User.findOne({_id:id})
        console.log('user.... ',user)
        if(!user) return res.json({status:false,message:'no user found'})
            return res.json({status:true,data:user})
    } catch (error) {
        return res.json({status:false,message:error})
        
    }
}