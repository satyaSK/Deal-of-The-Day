const router = require('express').Router();
let Emails = require('../models/emails.model');
const sgMail = require("@sendgrid/mail");
process.env.SENDGRID_API_KEY = "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";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg_template = {
    to:"",
    from:"noreply@dealotd.live",
    subject:"Todays Deal of the Day",
    html: "Get a free Large Double Chocolate Mocha with whipped cream. Use coupon code: <strong>ILOVECS562</strong>"
}

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
  sgMail.send(message);
  console.log('message sent successfully', message);
  newEmail.save()
    .then(function(){
      res.json('Email added!');
      
    }) 
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;