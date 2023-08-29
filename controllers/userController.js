
const User = require('../models/userModel.js')
exports.home = (req,res) => {
    res.send('Hello World Says Nitish !!!')
}

exports.createUser = async (req,res) => {
    // extract info
    try {
        const {name,email} = req.body

        if(!name || !email ){
            throw new Error ("Name and email are required");
        }
        const userExist = await User.findOne({email})
        if(userExist){
            throw new Error("user already exists");
        }

        
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
            message:error.message
        })
    }
}

exports.getUsers = async(req,res) => {
   try{
  const allUsers = await User.find({})
  res.status(200).json({
    success:true,
    allUsers
  })
   }catch(error){
    console.log(error);
    res.status(400).json({
        success:false,
        message:error.message
    })
   }

}

exports.updateUser = async(req,res) => {
    try{
    const updateduser = await User.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        success:true,
        message:"User updated successfully",
        updateduser
    })
    }catch(error){
       console.log(error);
       res.status(400).json({
        success:false,
        message:error.message,
       }) 
    }
}
exports.deleteUser = async (req,res) => {
    try{
     const userId = req.params.id
     const deletedUser = await User.findByIdAndDelete(userId)
     res.status(200).json({
        success:true,
        message:"user deleted successfully",
        deletedUser
     })

    }catch(error){
    console.log(error);
    res.status(400).json({
        success:false,
        message:error.message
    })
    }
}

