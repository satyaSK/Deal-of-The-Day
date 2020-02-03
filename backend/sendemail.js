const sgMail = require("@sendgrid/mail");
process.env.SENDGRID_API_KEY = "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";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to:"jawalkad@oregonstate.edu",
    from:"dealotd.live@gmail.com",
    subject:"Todays Deal of the Day",
    html: "Get a free Large Double Chocolate Mocha with whipped cream. Use coupon code: <strong>ILOVECS562</strong>"
}

//sgMail.send(msg);