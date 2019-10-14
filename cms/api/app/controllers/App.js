'use strict';

/**
 * App.js controller
 *
 * @description: A set of functions called "actions" for managing `App`.
 */

module.exports = {

  /**
   * Retrieve app records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.app.search(ctx.query);
    } else {
      return strapi.services.app.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a app record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.app.fetch(ctx.params);
  },

  /**
   * Count app records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.app.count(ctx.query, populate);
  },

  /**
   * Create a/an app record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.app.add(ctx.request.body);
  },

  /**
   * Update a/an app record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.app.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an app record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.app.remove(ctx.params);
  }
};
