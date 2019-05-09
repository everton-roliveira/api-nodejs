'use strict';
// const config = require('../config');
// const sendgrid = require('sendgrid')(config.sendgridKey);
// exports.send = async (to, subject, body) => {
//     sendgrid.send({
//         to: to,
//         from: 'ever.robertodeoliveira@gmail.com',
//         subject: subject,
//         html: body
//     });
// };


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.send = async (to, subject, body) =>{
    await sgMail.send({
        to: to,
        from: 'everton_roliveira@outlook.com',
        subject: subject,
        text: 'Seja bem vindo!',
        html: body
    });
}
