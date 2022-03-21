const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require("../middleware/auth");
const checkAdmin = require("../middleware/checkAdmin")


router.post("/updateDetails", UserController.updateDetails)
router.post("/login", UserController.loginUser);
router.post('/newUser', UserController.createUser);
router.post('./userDetails', UserController.getDetails);
router.post("/login", UserController.loginUser);
router.post("/resetPwd", UserController.resetPwd);
// router.post("/submit", auth, UserController.submitForm);

module.exports=router;