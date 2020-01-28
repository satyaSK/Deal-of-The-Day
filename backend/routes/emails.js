const router = require('express').Router();
let Emails = require('../models/emails.model');

router.route('/').get((req, res) => {
  Emails.find()
    .then(emails => res.json(emails))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;

  const newEmail = new Emails({email});

  newEmail.save()
    .then(() => res.json('Email added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;