import express from "express"
import Video from "../../Models/video.js"

export const videoSingleGetController=async(req,res)=>{
    // console.log('querry===> ',req.query)

    const {keyword}=req.query
    console.log('keywords===>  ',keyword.split(' '))
    const key=keyword.split(' ')
    try {
        let video1= await Promise.all( key.map(async(e)=>{
            return  await Video.find({keywords:e})
            
        }
    ))
    let video2=await video1[0]
    
    
    if(video2.length>0)return res.json({type:"keywords",data:video2})
        
        let video3=await Promise.all(
            key.map(async(e)=>{
                return  await Video.find({title:{$regex: `.*${e}`, $options:"i"}})

            })

            
        )
        let video4=await video3[0]
        if(video4.length>0)return res.json({type:"title",data:video4})

            return res.json('video not found!')
        

       
        console.log("==> key2 ",video2)
        console.log("==> key1 ",video1)
        console.log("==> key3 ",video3)
        
    } catch (error) {
        console.log(error)
        
    }

}