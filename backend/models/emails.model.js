const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailsSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']//added from stackoverflow
  },
}, {
  timestamps: true,
});

const Emails = mongoose.model('Emails', emailsSchema);

module.exports = Emails;