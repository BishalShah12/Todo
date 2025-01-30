import mongoose,{Schema} from "mongoose";

const todosSchema = new Schema({

    title:{
        type: String,
        required: true,

    },

    description:{
        type: String,
        default: ""
    },

    completed:{
        type: Boolean,
        default: false,
    }

}, {timestamps:true})