// Update with your config settings.
import path from 'path';
const BASE_PATH = path.dirname('src/server/db');

export default {
  development: {
    client: 'pg',
    connection: 'postgres://admin:123456@localhost:5432/blog',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
};
