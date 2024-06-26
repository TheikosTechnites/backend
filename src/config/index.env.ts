import * as dotenv from 'dotenv';

dotenv.config();
const ENVIRONMENT = process.env.ENVIRONMENT === 'dev';
const MONGODB_URI = process.env.MONGODB_URI;

export { ENVIRONMENT, MONGODB_URI };
