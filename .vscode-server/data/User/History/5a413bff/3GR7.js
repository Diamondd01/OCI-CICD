const request = require('supertest');
const app = require('../Public/script'); 
const fetchWeatherByCity= require('../Public/script')


global.fetch = jest.fn(()=>
    Promise.resolve({
        ok:true,
        json:()=> Promise.resolve({
            name:'Miami'
        })
    })
);


describe('fetchData function',()=>{
    test("fetches city names from API", async()=>{
        const data = await fetchWeatherByCity('Miami');
        expect(data).toEqual('Miami')
    })
    test("handles Network Errors",async()=>{
        global.fetch = jest.fn(()=>
        Promise.reject(new Error('Network Error'))
    );
    const data = await fetchWeatherByCity();
    expect(data).toBeNull();
    });
});
