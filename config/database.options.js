import env from './environment.js';

const options = {
  dialect: 'mysql',
  host: env.DATABASE_HOST,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  port: env.DATABASE_PORT,
};

export default options;
