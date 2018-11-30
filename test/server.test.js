
const expect = require('expect');
const superTest = require('supertest');

const {seed} = require('./seed');
const { app } = require('../server');


const Seed = new seed();

/**** Clean Task before executing test cases ******/

before(

    async()=> await Seed.cleanTables()
);


/***********************************************************/
//GET OFFICE SUMMARY
/***********************************************************/

describe('GET/summary', () => {



    it('should return all the office summary', (done) => {

        superTest(app)
            .get('/office')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(7);
                expect(Seed.arrayCompare(Seed.OfficeSummary, res.body)).toBeTruthy;
                 })
            .end(done);

    });

});

/***********************************************************/
//GET CUSTOMER BY CUSTOMER NUMBER
/***********************************************************/

describe('GET/customer/:id', () => {


    it('should return customer detail for a given customer number', (done) => {

        superTest(app)
            .get('/customer/103')
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(1);
                expect(Seed.arrayCompare(Seed.customer, res.body)).toBeTruthy;
            })
            .end(done);

    });


    it('should return 404 when the customer is not found', (done) => {

        superTest(app)
            .get('/customer/1030')
            .expect(404)
            .expect((res) => {
                expect(res.body.length).toBe(undefined);
            
            })
            .end(done);

    });


});

/***********************************************************/
//INSERT TASK
/***********************************************************/

describe('POST/task',()=>{


    it('should insert task',(done)=>{

            superTest(app)
            .post('/insertTask')
            .send(Seed.insertData)
            .expect(200)
            .end(done);


    });

});