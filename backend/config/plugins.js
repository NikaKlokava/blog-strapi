module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        auth: {
          user: env("SMTP_USER_EMAIL"),
          pass: env("SMTP_USER_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_USER_EMAIL_FROM"),
        defaultReplyTo: env("SMTP_USER_EMAIL_TO"),
      },
    },
  },
});
