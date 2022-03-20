const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
     res.send('Hello World!');
})

//------------tentative apis list

//--User featues
//login
//register
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
//search user feature
//show each user info

app.listen(process.env.PORT || 5000, () => {
	console.log(`Web-app backend is running at http://localhost:${port}`);
});
