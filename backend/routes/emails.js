require('dotenv').config();
const nodemailer = require('nodemailer');
const router = require('express').Router();
let Emails = require('../models/emails.model');
let transporter = nodemailer.createTransport({
service:'gmail',
auth: {
  user: process.env.USERNAME, // gmail user
  pass: process.env.PASSWORD // gmail password
}
});

let msg_template = {
    from: "DealOTD.live@gmail.com",
    to: "",
    subject:"DealOTD.live",
    html:"Heyy You,<br><br>The <a href='https://mu.oregonstate.edu/north-porch-cafe'>North Porch Cafe</a> has partnered with us for today, to bring you the deal of the day for one of their most popular dishes - The Asian Rice Bowl. This savoury dish is offered with your choice of rice, meat, sauces and 4 seasonal toppings. The Asian rice bowl has 5 distinct variants which you can try out at a specially discounted price of $5.99. This deal is valid <strong>exactly for 24hrs</strong> for the entire day of <strong>Wednesday, 11th March 2020</strong>. The offer expires and would not be redeemable after this time span. Provide the deal code below to the cashier, to avail the deal of the day today.<br><br><strong>Your Deal Code is</strong>: ILOVECS562<br><strong>Location</strong>: 112 Memorial Union, Oregon State University, Corvallis, OR<br><br>* Note that you cannot use this deal code on top of an already existing special for the day, which the North Porch Cafe provides.<br><br>Best Regards,<br>Team DealOTD"
};
//Get a Dutch Bros Large drink at $2 only, first 5 customers to use the given code will get ANY Dutch Bros drink absolutely FREE. Coupon Code: <strong>ILOVECS562</strong>
router.route('/').get((req, res) => {
  Emails.find()
    .then(emails => res.json(emails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const newEmail = new Emails({email});
  var message = msg_template;
  message["to"] = email;
  
  transporter.sendMail(message, (err,data)=>{
  if (err){
    console.log("Error Occured: ", err);
  } else{
    console.log("Sentt!!");
  }
  });
  console.log('message sent successfully', message);
  
  newEmail.save()
    .then(function(){
      res.json('Email added!');
      
    }) 
    .catch(err => res.status(400).json('Error: ' + err));
});

//new code 1/3/2020 //this code works //tested with inomnias
router.route('/count').get((req,res)=>{
  Emails.countDocuments({})
  .then((result)=>{
    console.log(result)
    res.send({count: result})
  })
  .catch(()=>{console.log("Count cannot be found due to technical errors")})
})

module.exports = router;