const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require("../middleware/auth");
const checkAdmin = require("../middleware/checkAdmin")

router.post('/newUser/:id',auth, checkAdmin, UserController.createUser);
router.get('./userDetails', auth, UserController.getDetails);
router.post("/login", UserController.loginUser);
router.post("/resetPwd", UserController.resetPwd);
router.post("/submit", auth, UserController.submitForm);
router.post("/updateDetails",auth, UserController.updateDetails)

module.exports=router;