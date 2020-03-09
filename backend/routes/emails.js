require('dotenv').config();
const nodemailer = require('nodemailer');
const router = require('express').Router();
let Emails = require('../models/emails.model');
let transporter = nodemailer.createTransport({
service:'gmail',
auth: {
  user: process.env.USER, // gmail user
  pass: process.env.PASSWORD // gmail password
}
});

let msg_template = {
    from: "DealOTD.live@gmail.com",
    to: "",
    subject:"DealOTD.live",
    html:"DUTCH BROS DEAL FOR THE DAY & COUPON CODE GO HERE"
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