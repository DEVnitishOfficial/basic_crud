
const  express = require("express")
const {home,createUser} = require("../controllers/userController.js")

const router = express.Router();
router.get("/",home)
router.get('createuser',createUser);


module.exports = router;