module.exports = {
    dialect: process.env.DIALECT_DB,
    host: process.env.HOST_DB,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    logging: false,
    define: {
        timestamp: true,
        underscored: true,
    },
};