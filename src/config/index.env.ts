import * as dotenv from 'dotenv';

dotenv.config();
const ENABLE_TEST = process.env.ENABLE_TEST === '';
const ENABLE_BUYBACK_V2 = process.env.ENABLE_BUYBACK_V2 === 'true';

export { ENABLE_BUYBACK_V2, ENABLE_TEST };
