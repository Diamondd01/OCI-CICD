const request = require('supertest');
const app = require('../Public/script'); 

global.fetch = jest.fn(()=>
    Promise.resolve({
        ok:true,
        json:()=> 
            Promise.resolve({
                name:'Miami'
        })
    })
);


describe('fetchData function',()=>{
    test("handles Network Errors",async()=>{
        global.fetch.mockImplementationOnce(()=>
        Promise.reject(new Error('Network Error'))
    );

    });
});
