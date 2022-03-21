const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const User = require("../models/user");
const Form = require("../models/form");

const submitForm = async (req, res) => {
	try {
		const data =new Form(req.body)
		data.save();
		res.status(200).send("Form submitted");
	} catch (err) {
		res.status(500).send({ message: "Something went wrong" });
	}
}

const createUser = async (req, res) => {

	let success = false;
	try {
		let user = await User.findOne({
			loginID: req.body.loginID,
		});
		if (user) {
			success = false;
			return res.status(400).json({
				success,
				error: "loginID already Exists"
			});
		}

		const salt = await bcrypt.genSalt(10);
		const secPass = await bcrypt.hash(req.body.password, salt);

		user = await User.create({
			name: req.body.name,
			phoneNumber: req.body.phoneNumber,
			email: req.body.email,
			loginID: req.body.loginID,
			password: secPass,
			location: req.body.location
		});

		const data = {
			user: {
				id: user.id
			}
		}

		const authToken = generateToken(data);

		success = true
		res.json({ success, authToken })
	} catch (error) {
		console.log(error.message)
		res.status(500).send("Internal Server Error");
	}
}

const loginUser = async (req, res) => {
	const { loginID, password } = req.body;

	try {
		let success = false;
		if (!(loginID && password)) {
			success = false;
			res.status(400).send({
				success,
				error: "Missing fields"
			});
		}

		const existingUser = await User.findOne({
			loginID: loginID
		});
		if (!existingUser)
			return res.status(404).json({
				success,
				error: "User doesn't exist"
			});

		const isPasswordValid = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordValid)
			return res.status(401).json({ success, error: "Invalid password" });

		success = true;
		res.status(200).json({
			success,
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
		const text = `Hi ${existingUser.name},\n\nYou recently requested to reset your password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\nhttp://localhost:3000/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n\nThanks,\n\nTeam`;
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


const getDetails = async (req, res) => {
	try {
		const userID = req.user.id;
		const user = await User.findById(userID);
		select("-password");
		res.send(user);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Internal Server Error");
	}
}
module.exports = { createUser, loginUser, resetPwd, getDetails };

