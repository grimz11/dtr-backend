module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("NODE_ENV") === "production" ? 'https://hyperstack-dtr-backend.herokuapp.com' : "",
  admin: {
    url: '/admin',
    // serverAdminPanel: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
