const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const User = require("../models/user");

const loginUser = async (req, res) => {
	const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
	const { email, password } = req.body;

	try {
		if (!(email && password)) {
			res.status(400).send("Missing fields");
		}

		const existingUser = await User.findOne({
			email: email.toLowerCase(),
		});
		if (!existingUser)
			return res.status(404).json({ message: "User doesn't exist" });

		const isPasswordValid = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordValid)
			return res.status(401).json({ message: "Invalid password" });
		
          res.status(200).json({
			user: existingUser,
			token: generateToken(existingUser._id),
		});
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
	}
};

const resetPwd = async (req, res) => { 
	const { mail } = req.body;
	try {
		if (!mail) {
			res.status(400).send("Missing fields");
		}

		const existingUser = await User.findOne({
			email: mail.toLowerCase(),
		});
		if (!existingUser)
			return res.status(404).json({ message: "User doesn't exist" });

		const token = generateToken(existingUser._id);
		const text = `Hi ${existingUser.username},\n\nYou recently requested to reset your password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\nhttp://localhost:3000/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n\nThanks,\n\nTeam`;
		const subject = "Password Reset Request";
		const email = existingUser.email;
		const sendEmail = require("../utils/sendEmails");
		sendEmail(email, subject, text);

		res.status(200).json({
			message: "Email sent",
		});
	} catch (err) {
		res.status(500).json({ message: "Something went wrong" });
	}
}
module.exports={loginUser,resetPwd};