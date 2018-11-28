const { office } = require('../model/office.model');

module.exports = (app) => {


    /**** GET USERS DETAIL ****/

    app.get('/office', (req, res) => {

        Office = new office();

        Office.getOffice().then(

            (data) => {

                res.send(JSON.stringify(data, undefined, 2));

            },

            (err) => {

                res.status(404).send(err);
            }

        ).catch((err) => {

            res.status(400).send(err)
        });



    });

}