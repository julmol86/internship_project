import { GMAIL_PASS, GMAIL_USER } from "../../DO_NOT_COMMIT";

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

export const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  }
}));

const mailOptions = (recipient: string, subject: string, text: string) => ({
  from: {
    name: 'TL Timing Oy',
    address: GMAIL_USER
  },
  to: recipient,
  subject: subject,
  text: text,
});

export const sendMail = (recipient: string, subject: string, text: string) => {
  transporter.sendMail(mailOptions(recipient, subject, text), function(error: any, info: any){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export const SUBJECT_APPLICANT = 'Osallistumisvahvistus'
export const TEXT_APPLICANT = 'Kiitos ilmoittautumisesta!'
export const SUBJECT_ADMIN = 'Uusi kilpailija'
export const TEXT_ADMIN = 'Tiedot: '
export const SUBJECT_ORGANIZATION = 'Tervetuloa käyttämään TL-Timing palveluita'
