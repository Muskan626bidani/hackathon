const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require("../middleware/auth");

router.post("/login",[
    body("username", "Enter a valid email").isEmail(),
    body("password", "password must be at least 3 digits").isLength({ min: 5 })
  ], UserController.loginUser);
router.post('/newUser', UserController.createUser);
router.post('./userDetails', UserController.getDetails);
router.post("/login", UserController.loginUser);
router.post("/resetPwd", UserController.resetPwd);
<<<<<<< HEAD
// router.post("/submit", auth, UserController.submitForm);

=======
>>>>>>> 15059997992a5e6a7e0e59d0731ab7af472990ed

module.exports=router;