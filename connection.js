
const mysql = require('mysql');
const config = require('./config');

const {testConfig} = require('./test/config');

class Connection {

  constructor() {

    this.connection;

    this.createSqlConnection();

  }

  createSqlConnection() {

    //Configurations for MYSQL Connection

    if(config.get('NODE_ENV') != 'test'){

      const options = {
        user: config.get('MYSQL_USER'),
        password: config.get('MYSQL_PASSWORD'),
        database: 'classicmodels',
        host: '35.230.36.80'
      };

   
      //Socket Path for Production. NODE_ENV is production when running from Cloud
  
      if (config.get('INSTANCE_CONNECTION_NAME') && config.get('NODE_ENV') === 'production') {
        options.socketPath = `/cloudsql/${config.get('INSTANCE_CONNECTION_NAME')}`;
      }
  
      //MySql Connection Object
  
      this.connection = mysql.createConnection(options);
  

    }else {

      //Test Server

      const options = {
        user: testConfig.MYSQL_USER,
        password: testConfig.MYSQL_PASSWORD,
        database: testConfig.DATABASE_NAME,
        host: testConfig.HOST_NAME
      };

     //MySql Connection Object
  
     this.connection = mysql.createConnection(options);

    
    }

    

  }


  getConnection() {

        return this.connection;

  }

}


module.exports = {

  Connection

};