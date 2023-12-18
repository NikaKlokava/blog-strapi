module.exports = {
  async afterCreate() {
    const response = strapi.service("api::follower.follower");
    const followers = await response.find();

    const emails = followers?.results?.reduce((accum, current) => {
      return [...accum, current.email];
    }, []);

    if (emails) {
      try {
        console.log("emails", emails);
        await strapi.plugins["email"].services.email.send({
          to: emails,
          from: "veronika.kazakevich1997@gmail.com",
          subject: "Hello from Traveler! I have a new post for you.",
          text: "Hello! A new post has been released, let's join The Traveler.",
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
};
