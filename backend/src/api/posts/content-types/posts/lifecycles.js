const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER_EMAIL, // env("SMTP_USER_EMAIL")
    pass: process.env.SMTP_USER_PASSWORD, //env("SMTP_USER_PASSWORD")
  },
});

module.exports = {
  async afterCreate() {
    console.log(process.env.SMTP_USER_EMAIL);

    const response = strapi.service("api::follower.follower");
    const followers = await response.find();

    const emails = followers?.results?.reduce((accum, current) => {
      return [...accum, current.email];
    }, []);
    console.log(emails);
    try {
      await transporter.sendMail({
        from: "The Traveler",
        to: emails,
        subject: `Hello from "Traveler"! I have a new post for you.`,
        text: `Hello! A new post has been released, let's join "The Traveler".`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
