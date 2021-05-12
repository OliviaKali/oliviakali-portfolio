var path = require("path");
require("dotenv").config();
var nodemailer = require("nodemailer");

module.exports = function(app) {
    app.post("/contact-form", (req, res) => {
       let transporter = nodemailer.createTransport({
           service: "gmail",
           auth: {
               user: process.env.EMAIL,
               pass: process.env.PASSWORD
           },
       });

       let mailData = {
           from: process.env.EMAIL,
           to: process.env.EMAIL,
           subject: `Contact Form from Porfolio`,
           text: `Contact Form from Portfolio from
           name: ${req.body.name},
           email: ${req.body.email},
           message: ${req.body.message}`
       };

       transporter.sendMail(mailData).then(function(response) {
           console.log(`Email sent with promise`)
       }).catch(function (error) {
           console.log(`Error occured: ${error}`);
       });

        res.send(`Thank You for sending an email to Decyma Construction. 
             We will get back to your as soon as possible.`);
//res.sendFile(path.join(__dirname, "../public/contact-form-sent.html"));
    });
}