//Requirements for testing
//TDD - create test for a module that will obscure the credit card number and return the last 4 digits
//Test to make sure the function obscures the credit card number that are between the length of 12 and 16 digits 

const obscureCreditCard = require("./creditcard");

//Two tests are required describe which creates the test suite

describe('Testing the credit card number function', function() {

    //First test is to make sure the function is defined
    test('Obscure credit card number should be defined', ()=>{
        expect(obscureCreditCard).toBeDefined();
    });

    //Second test is to make sure the function returns the last 4 digits of the credit card number
    test('should return the last 4 digits of the credit card number', ()=>{
        expect(obscureCreditCard(1234567890123456)).toEqual('************3456');
    });
});