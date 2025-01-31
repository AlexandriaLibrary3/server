import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default {
    schema: './src/shared/database/schema/index.ts',
    out: './src/shared/database/migrations',
    dialect: 'turso',
    casing: 'snake_case',
    dbCredentials: {
        url: process.env.DB_URL,
        authToken: process.env.DB_AUTH_TOKEN,
    },
} satisfies Config;
