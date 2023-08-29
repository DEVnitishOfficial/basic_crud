
const  express = require("express")
const {home,createUser,getUsers,deleteUser,updateUser} = require("../controllers/userController.js")

const router = express.Router();
router.get("/",home)
router.post('/createuser',createUser)
router.get("/getusers",getUsers)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)


module.exports = router;