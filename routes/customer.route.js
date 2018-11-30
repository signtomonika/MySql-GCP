
const { customer } = require('../model/read.customer')

module.exports = (app) => {


    /**** GET OFFICE BY ID ****/

    app.get('/customer/:id', (req, res) => {

        Customer = new customer();

        Customer.getCustomerById(req.params.id).then(

            (data) => {

                if (data!==[] && data.length!=0) {

                    res.send(JSON.parse(JSON.stringify(data, undefined, 2)));

                } else {

                    res.status(404).send({ "err": "No customer Found" });

                }


            },

            (err) => {

                res.status(404).send(err);
            }

        ).catch((err) => {

            res.status(400).send(err)
        });



    });

}

