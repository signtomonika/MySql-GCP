
const { task } = require('../model/insert.task');


module.exports = (app) => {


    /**** WRITE TASK****/

    app.post('/insertTask', (req, res) => {

        taskObj = new task();

        let newTask = req.body.testData;

        taskObj.insertTask(newTask).then(

            (data) => {

                let testID = JSON.parse(JSON.stringify(data, undefined, 2)); //Primary Key Of newly inserted test case

                res.send(testID);


            },

            (err) => {

                res.status(404).send(err);
            }

        ).catch((err) => {

            res.status(400).send(err)
        });



    });

}

