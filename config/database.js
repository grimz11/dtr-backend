module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "strapi"),
            username: env("DATABASE_USERNAME", "strapi"),
            password: env("DATABASE_PASSWORD", "strapi"),
            schema: env("DATABASE_SCHEMA", "public"), 
            ssl: {
              rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
            },
          },
          options: {
            ssl: env.bool("DATABASE_SSL", false),
          },
        },
      },
    };
  }
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "mysql",
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 3306),
          database: env("DATABASE_NAME", "dtr"),
          username: env("DATABASE_USERNAME", "hyperstacksinc"),
          password: env("DATABASE_PASSWORD", "Hello101!"),
          ssl: env.bool("DATABASE_SSL", true),
        },
        options: {},
      },
    },
  };
};