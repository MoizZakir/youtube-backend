import UserSchema from '../../Models/user.js'

export const unFollowController=async(req,res)=>{

    if(req.body.id!=req.user.payload._id){
        try {
            let  user1=await UserSchema.findOne({_id:req.body.id})
            let  user2=await UserSchema.findOne({_id:req.user.payload._id})

            if(!user1) res.send('user not found!')
         
             if(user1?.follower.includes(req.user.payload._id)) {
                 
                 await user1.updateOne({$pull:{follower:req.user.payload._id}})
                 await user2.updateOne({$pull:{following:req.body.id}})
                 res.json({user1,user2})
             }
             else{
                res.send('you have already unfollow')
             }


        } catch (error) {
            res.send(error)
            console.log(error)
            
        }
  
    }



else{
res.send('you can not unfollow yourself')
}


}