const { default: mongoose } = require("mongoose")

const chatSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },
        message:{
            type:String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model.chats || mongoose.model('chats', chatSchema)