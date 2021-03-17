'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  findUsersRecordsByDate: async ctx => {
    const {initialized_at} = ctx.query;

    const knex = strapi.connections.default;
    const result = await knex('records')
    .where('initialized_at', 'LIKE',`%${initialized_at}%`)

    return await sanitizeEntity(result, { model: strapi.models.records });
  }
};
