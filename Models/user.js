import mongoose, { Schema } from "mongoose";
const UserSchema=new Schema({
    name:{
        type:String,
        require:true,
        min:3,
        max:20,
        
    },
    phone:{
        type:String,
        require:true,
        max:15

        

    },
    dob:{
      type:String,
      require:true,
      max:50

      

  }
    ,
    email:{
        type:String,
        require:true,
        min:7,
        unique:true,
        max:30,

    },
    password:{
        type:String,
        require:true,
        min:6
    },
    profilePicture:{
        type:String,
      default:""
    },
    follower:{
        type:Array,
      default:[]
    }
    ,
    following:{
        type:Array,
      default:[]
    }
    ,address:{
        type:String,
        max:70,
        require:true
      },
      country:{
        type:String,
        max:50,
        require:true
      },


},{timestamps:true})

export default mongoose.model('YoutubeUsers',UserSchema)