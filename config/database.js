const parse = require('pg-connection-string');

module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production'){
    const config = parse(process.env.DATABASE_URL);

    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
            // ssl: true
          },
          options: {
            ssl: false
          },
        },
      },
    }
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
