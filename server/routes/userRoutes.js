const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require("../middleware/auth");
const checkAdmin = require("../middleware/checkAdmin")

router.post("/updateDetails", UserController.updateDetails)
router.post("/login", UserController.loginUser);
router.post('/newUser', UserController.createUser);
router.get("/userDetails/:id", UserController.getDetails);
router.post("/submit",  UserController.submitForm);
router.get("/getUsers",checkAdmin, UserController.getUsers);

module.exports=router;