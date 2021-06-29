// module.exports = {
//   port: process.env.PORT || 9080,
//   db: {
//     database: process.env.DB_NAME || 'Tabtracker',
//     user: process.env.DB_USER || 'Tabtracker',
//     password: process.env.DB_PASS || 'Tabtracker',
//     options: {
//       dialect: process.env.DIALECT || 'sqlite',
//       host: process.env.HOST || 'localhost',
//       storage: './tabtracker.sqlite',
//     },
//   },
//   authentication: {
//     jwtSecret: process.env.JWT_SECRET || 'secret',
//   },
// };

// const path = require('path')

module.exports = {
  port: process.env.PORT || 9080,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite',
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
