const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "veronika.kazakevich1997@gmail.com",
    pass: "kicx mzrh yiai sazr",
  },
});

module.exports = {
  async afterCreate(event) {
    const response = strapi.service("api::follower.follower");
    const followers = await response.find();

    const emails = followers?.results?.reduce((accum, current) => {
      return [...accum, current.email];
    }, []);

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
