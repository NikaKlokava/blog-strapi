"use strict";

/**
 * posts router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::posts.posts');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/all-posts",
      handler: "posts.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
