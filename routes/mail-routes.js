var path = require("path");
require("dotenv").config();
var nodemailer = require("nodemailer");

module.exports = function(app) {
    app.post("/contact-form", (req, res) => {
        //nodemailer, gmail, transporter go here
    })
}