const { insert } = require('../query/insert.query');


class task {


    constructor() {

        this.insertValues = [];
    }

    async insertTask(input) {


        try {


            input.forEach(task => {

                let values = Object.keys(task).map(function (_) { return task[_]; })

                this.insertValues.push(values);

            });

            var query = `Insert  into tasks (title,priority) values ?`;


            const result = JSON.parse(JSON.stringify(await insert(query, this.insertValues)));


            if (result) {

                return ({
                    insertID: result.insertId,
                    serverStatus: result.serverStatus,
                    message: result.message,
                    apiStatus: 1
                });

            } else {

                throw new error('Insert Failed');
            }



        } catch (err) {

            return err;
        }


    }
}

module.exports = {

    task
};