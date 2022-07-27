const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const commentSchema = new Schema(
//     {
//     author: {type:String, required: true},
//     content: {type:String, required: true},
//     likes: {type: Number, default:0},
//     },
//     created: {
//         type:Date,
//         default: new Date()
//     }
// )

const PostSchema = new Schema(
    {
        title:{type:String, required: true},
        content: {type:String, required: true},
        likes: {type:Number, default:0},
        ign: {type: String},
        // comments: [commentSchema]
        created: {
                    type:Date,
                    default: new Date()
                }

    }
)

module.exports = mongoose.model('Post', PostSchema)

