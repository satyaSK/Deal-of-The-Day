const sgMail = require("@sendgrid/mail");
process.env.SENDGRID_API_KEY = "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";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to:"jawalkad@oregonstate.edu",
    from:"noreply@dealotd.live",
    subject:"Todays Deal of the Day",
    html: "Get a free Large Double Chocolate Mocha with whipped cream. Use coupon code: <strong>ILOVECS562</strong>"
}

//sgMail.send(msg);