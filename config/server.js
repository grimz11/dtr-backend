module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.PORT || env.int('PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '54c971298849c7ab4c1b2a4eede84703'),
    },
  },
});
