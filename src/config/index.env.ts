import * as dotenv from 'dotenv';

dotenv.config();
const ENVIRONMENT = process.env.ENVIRONMENT === '';

export { ENVIRONMENT };
