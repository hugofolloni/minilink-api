require('dotenv').config()

const config = {
    db: {
        host: 'db4free.net',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'minilink'
    },
    listPerPage: 200
}

module.exports = config;