require('dotenv').config(); 
module.exports ={
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "port": 3306,
    "dialect": "mysql"
  },
    "test": {
      "username": "root",
      "password": "",
      "database": "database_test",
      "host": "127.0.0.1",
      "port": 3306,
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE,
      "host": process.env.HOST,
      "port": 3306,
      "dialect": "mysql"
    }
}
  