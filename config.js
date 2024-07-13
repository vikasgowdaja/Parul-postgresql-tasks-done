require('dotenv').config();

console.log('Database URL:', process.env.DATABASE_URL);

module.exports = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
};
