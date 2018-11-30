const { office } = require('../model/read.office');

module.exports = (app) => {


    /**** GET OFFICE SUMMARY ****/

    app.get('/office', (req, res) => {

        Office = new office();

        Office.getOffice().then(

            (data) => {

                res.send(JSON.parse(JSON.stringify(data, undefined, 2)));

            },

            (err) => {

                res.status(404).send(err);
            }

        ).catch((err) => {

            res.status(400).send(err)
        });



    });



}