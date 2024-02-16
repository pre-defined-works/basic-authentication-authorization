const userModel = require('../models/userModel')

const authenticateUser = async(request, response) => {
    response.status(200).json({status: 'success', code:200, message: `Hello ${request.user.firstName} ${request.user.lastName}! Welcome to User Dashboard`})
}

const getAllUsers = async(request, response) => {
    const users = await userModel.find({
        $and: [
                {_id:{$nin: [request.user._id]}},
                { role: { $ne: 'admin' }}
            ]})
    response.status(200).json({status:'success', code: 200, user:request.user, users: users})
}

module.exports = {authenticateUser, getAllUsers}