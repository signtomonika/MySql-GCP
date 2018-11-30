
const { executeQuery } = require('../query/basic.query');

class office {

    constructor() {

        this.officeArray = [];

    }

    async getOffice() {

        try {



            var query = 'select city, country from offices';

            //Result is formatted

            const result = await executeQuery(query)

            result.forEach(office => {

                this.officeArray.push({

                    City: office.city,
                    Country: office.country

                });



            });

            return this.officeArray;

        } catch (err) {

            return err;

        }


    }


}

module.exports = { office };



