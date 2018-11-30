const { executeQuery } = require('../query/basic.query');

class customer {

    constructor() {

        this.customerArray = [];

    }

    async getCustomerById(id) {

        try {



            var query = `select customerNumber, customerName, concat(contactFirstName,' ',contactLastName) as Contact, city, country, concat(B.firstName,' ',B.lastName) as SalesRep 

            from customers A join employees B on A.salesRepEmployeeNumber = B.employeeNumber
            
            where A.customerNumber = ${id}`;

            //Result is formatted

            const result = await executeQuery(query)

            result.forEach(data => {

                this.customerArray.push({

                    CustomerNo: data.customerNumber,
                    Name: data.customerName,
                    City: data.city,
                    Country: data.country,
                    Contact: data.Contact,
                    SalesRep: data.SalesRep

                });



            });

            return this.customerArray;

        } catch (err) {

            return err;

        }


    }


}

module.exports = { customer };



