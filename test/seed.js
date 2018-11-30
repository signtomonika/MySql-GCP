const { executeQuery } = require('../query/basic.query');

class seed {


    constructor() {

        this.customerID = 103;



        this.OfficeSummary = [
            {
                "City": "San Francisco",
                "Country": "USA"
            },
            {
                "City": "Boston",
                "Country": "USA"
            },
            {
                "City": "NYC",
                "Country": "USA"
            },
            {
                "City": "Paris",
                "Country": "France"
            },
            {
                "City": "Tokyo",
                "Country": "Japan"
            },
            {
                "City": "Sydney",
                "Country": "Australia"
            },
            {
                "City": "London",
                "Country": "UK"
            }
        ];


        this.insertData = {
            "testData": [{
                "title": "API From Test",
                "priority": 1

            }]
        };


        this.customer = [
            {
                "CustomerNo": 103,
                "Name": "Atelier graphique",
                "City": "Nantes",
                "Country": "France",
                "Contact": "Carine  Schmitt",
                "SalesRep": "Gerard Hernandez"
            }
        ]


    }

    arrayCompare(arr1, arr2) {

        if (arr1.length == arr2.length
            && arr1.every(function (u, i) {
                return u === arr2[i];
            })
        ) {
            return true;
        } else {
            return false;
        }


    }

    async cleanTables() {

        const title = 'API From Test';

        const query = `delete from tasks where title = '${title}'`;

        try{

            await executeQuery(query);

        }catch(err){

            console.log(err);

        }

       
    }


}

module.exports = {

    seed
};