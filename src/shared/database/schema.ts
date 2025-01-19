import { int, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

const createdAt = int('created_at', { mode: 'timestamp' });
const updatedAt = int('updated_at', { mode: 'timestamp' });
const deletedAt = int('deleted_at', { mode: 'timestamp' });

export const users = sqliteTable('users', {
    id: text({ length: 30 }).primaryKey(),
    nickname: text({ length: 20 }).notNull(),
    email: text({ length: 50 }).notNull().unique(),
    isEmailVerified: int('is_email_verified', { mode: 'boolean' }).notNull(),
    password: text({ length: 200 }),
    otp: text({ length: 6 }),
    otpExpiryDate: int('otp_expiry_date', { mode: 'timestamp' }),
    createdAt,
    updatedAt,
    deletedAt,
});

export const userTokens = sqliteTable('user_tokens', {
    id: text({ length: 30 }).notNull().primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    refreshToken: text('refresh_token', { length: 100 }).notNull(),
    expiryDate: int('expiry_date', { mode: 'timestamp' }),
    lastRefreshingDate: int('last_refreshing_date', { mode: 'timestamp' }),
    createdAt,
    updatedAt,
    deletedAt,
}, (table) => ({
    // userId와 refreshToken을 합쳐서 unique 제약조건 생성
    userTokenUnique: uniqueIndex('user_token_unique_idx').on(table.userId, table.refreshToken),
}));

