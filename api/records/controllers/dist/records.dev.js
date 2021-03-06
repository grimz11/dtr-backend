'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

var _require = require('strapi-utils'),
    sanitizeEntity = _require.sanitizeEntity;

module.exports = {
  findUsersRecordsByDate: function findUsersRecordsByDate(ctx) {
    var initialized_at, knex, result;
    return regeneratorRuntime.async(function findUsersRecordsByDate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initialized_at = ctx.query.initialized_at;
            knex = strapi.connections["default"];
            _context.next = 4;
            return regeneratorRuntime.awrap(knex('records').where('initialized_at', 'LIKE', "%".concat(initialized_at, "%")));

          case 4:
            result = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(sanitizeEntity(result, {
              model: strapi.models.records
            }));

          case 7:
            return _context.abrupt("return", _context.sent);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};