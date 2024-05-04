
import {Types,Schema, model } from "mongoose";
const herbSchema=new Schema({
    ArabicName:{
        type:String,
        required:[true,'Arabic Name is required'],
        min:[3,'min length is 3'],
        max:[25,'max length is 25']
    },
    EnglishName:{
        type:String,
        required:[true,'English Name is required'],
        min:[3,'min length is 3'],
        max:[25,'max length is 25']
    },
    description:{
        type:String
    },
    benefit:{
        type:String
    },
    effect:String,
    place:String,
    image:String,
    createdBy:{
        type:Types.ObjectId,
        ref:'user',
        required:[true,'herb owner is required']
    },
    publicId:String


})

const herbModel=model('herb',herbSchema)

export {herbModel}