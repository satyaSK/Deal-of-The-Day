const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dealsSchema = new Schema({
  deal: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Deals = mongoose.model('Deals', dealsSchema);

module.exports = Deals;