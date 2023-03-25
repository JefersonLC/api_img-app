import options from './database.options.js';

const DEV_CONFIG = Object.assign(options, { logging: true });

const PROD_CONFIG = Object.assign(options, { logging: false });

export default {
  development: DEV_CONFIG,
  production: PROD_CONFIG
};
