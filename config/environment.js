import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: Number(process.env.PORT) || 8000,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PORT: Number(process.env.DATABASE_PORT),
  SECRET: process.env.SECRET,
  DOMAIN: process.env.DOMAIN,
  EMAIL: process.env.EMAIL,
  EMAIL_PASS: process.env.EMAIL_PASS
};

export default env;
