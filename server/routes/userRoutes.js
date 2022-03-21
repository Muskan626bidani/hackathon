const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require("../middleware/auth");

router.post("/login", UserController.loginUser);
router.post("/resetPwd", UserController.resetPwd);
router.post("/submit", UserController.submitForm);

module.exports=router;