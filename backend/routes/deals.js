const router = require('express').Router();
let Deals = require('../models/deals.model');

router.route('/').get((req, res) => {
  Deals.find()
    .then(deals => res.json(deals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const deal = req.body.deal;

  const newDeal = new Deals({deal});

  newDeal.save()
    .then(() => res.json('Deal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;