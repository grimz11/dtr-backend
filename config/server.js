module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://hyperstack-dtr-backend.herokuapp.com',
  admin: {
    url: '/',
    serverAdminPanel: false,
    // auth: {
    //   secret: env('ADMIN_JWT_SECRET', '54c971298849c7ab4c1b2a4eede84703'),
    // },
  },
});
