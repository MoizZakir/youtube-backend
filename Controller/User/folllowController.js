import UserSchema from '../../Models/user.js'

export const followController=async(req,res)=>{

    if(req.params.id!=req.user.payload._id){
        try {
            let  user1=await UserSchema.findOne({_id:req.params.id})
            let  user2=await UserSchema.findOne({_id:req.user.payload._id})

            if(!user1) res.send('user not found!')
         
             if(!user1?.follower.includes(req.user.payload._id)) {
                 
                 await user1.updateOne({$push:{follower:req.user.payload._id}})
                 await user2.updateOne({$push:{following:req.params.id}})
                 res.json({user1,user2})
             }
             else{
                res.send('you have already follow')
             }


        } catch (error) {
            res.send(error)
            console.log(error)
            
        }
  
    }



else{
res.send('you can not follow yourself')
}


}