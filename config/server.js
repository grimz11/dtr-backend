module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("NODE_ENV") === "production" ? 'https://hyperstack-dtr-backend.herokuapp.com' : "",
  admin: {
    url: '/admin',
    // serverAdminPanel: false,
    auth: {
      secret: env("NODE_ENV") !== "production"? "54c971298849c7ab4c1b2a4eede81111" : env('ADMIN_JWT_SECRET'),
    },
  },
});
