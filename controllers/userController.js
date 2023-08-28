
const User = require('../models/userModel.js')
exports.home = (req,res) => {
    res.send('Hello World Says Nitish !!!')
}

exports.createUser = async (req,res) => {
    // extract info
    try {
        const {name,email} = req.body
        
        const dbResult = await User.create({
            name,
            email
        })
        res.status(200).json({
            success:true,
            message:"user created Successfully",
            dbResult
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"error.message"
        })
    }
}