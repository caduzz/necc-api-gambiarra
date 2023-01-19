module.exports = {
    dialect: process.env.DIALECT_DB,
    host: process.env.HOST_DB,
    username: process.env.USERNAME_DB_CORA,
    password: process.env.PASSWORD_DB_CORA,
    database: process.env.DATABASE_DB_CORA,
    logging: false,
    define: {
        timestamp: true,
        underscored: true,
    },
};