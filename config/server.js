module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/admin',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '54c971298849c7ab4c1b2a4eede84703'),
    },
  },
});
