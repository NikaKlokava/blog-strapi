module.exports = {
  async afterCreate() {
    const response = strapi.service("api::follower.follower");
    const followers = await response.find();

    const emails = followers?.results?.reduce((accum, current) => {
      return [...accum, current.email];
    }, []);

    // if (emails) {
      try {
        await strapi.plugins["email"].services.email.send({
          to: "veronika.kazakevich1997@gmail.com",
          from: "The Traveler",
          subject: `Hello from "Traveler"! I have a new post for you.`,
          text: `Hello! A new post has been released, let's join "The Traveler".`,
        });
      } catch (err) {
        console.log(err);
      }
    // }
  },
};
