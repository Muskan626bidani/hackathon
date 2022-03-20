const express = require('express');
const app = express();

const cors = require('cors')
const bodyParser = require('body-parser');
const connectToMongo = require('./db');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

connectToMongo();

app.get('/', (req, res) => {
     res.send('Hello World!');
})

//------------tentative apis list

//--User featues
//login
//reset pwd/forgot pwd
//submit and save details
//get details
//update details
//notifs
//nodemailer...to tell about deadlines

//--Admin features
//login
//broadcast/create events
//edit events
//show users
//user info
//search user feature
//show each user list
//show list

app.listen(port, () => {
	console.log(`Web-app backend is running at http://localhost:${port}`);
});
