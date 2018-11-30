const { Connection } = require('../connection');


var insert = (query, values) => {



    return new Promise(

        (resolve, reject) => {

            //creating new connection before querying

            const Connect = new Connection();

            connection = Connect.getConnection()

            //Connect to existing connection

            connection.connect(function (err) {

                if (err) reject(err);

                //Querying Starts

                connection.query(query, [values], function (err, result) {

                    if (err) reject(err);

                    //closing the connection

                    connection.end();

                    //returns the result set


                    resolve(result);

                });

            });


        }

    );



}

module.exports = {

    insert
};

