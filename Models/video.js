import mongoose, { Schema } from "mongoose";

const Video= new Schema({
    authId:{
        require:true,
        type:String,
    },
    title:{
        type:String,
        max:100,
        min:5,
        require:true

    },
    thumbnail:{
        type:String,
        require:true
    },
    video:{
        type:String,
        require:true
    },
    veiws:{
        type:Array,
        default:[]

    },

    likes:{
        type:Array,
        default:[]
    },
    dislikes:{
        type:Array,
        default:[]
    },
    keywords:{
        type:Array,
        require:true
       
    }
},{timestamps:true})

export default mongoose.model('videos',Video)
