const request = require('supertest');
const app = require('../Public/script'); 


describe('fetchData function',()=>{
    test("handles Network Errors",async()=>{
        global.fetch.mockImplementationOnce(()=>
        Promise.reject(new Error('Network Error'))
    );
    });
});
