const nodemailer = require('nodemailer');

//step 1

let transporter = nodemailer.createTransport({
service:'gmail',
auth: {
  user: 'dealotd.live@gmail.com', // generated ethereal user
  pass: 'ahambrahmasmi' // generated ethereal password
}
});

let mailOptions = {
		from: "dealotd.live@gmail.com",
		to: "kambles@oregonstate.edu",
		subject:"Dealotd.live",
		html:"Get a Dutch Bros Large drink at $2 only, first 5 customers to use the given code will get ANY Dutch Bros drink absolutely FREE. Coupon Code: <strong>ILOVECS562</strong>"
};

transporter.sendMail(mailOptions, (err,data)=>{
	if (err){
		console.log("Error Occured: ", err);
	} else{
		console.log("Sentt!!");
	}
});