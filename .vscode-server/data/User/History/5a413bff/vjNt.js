const request = require('supertest');
const app = require('../Public/script'); 
const fetchWeatherByCityName= require('../Public/script')


global.fetchWeatherByCityName = jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve([{cityName: "Miami"}, {cityName:'Atlanta'}])
    })
);


describe('fetchData function',()=>{
    test("fetches city names from API", async()=>{
        const data = await fetchWeatherByCityName('Miami');
        expect(data).toBeTruthy();
        expect(data.name).toBe('Miami')
    })
    test("handles Network Errors",async()=>{
        global.fetch = jest.fn(()=>
        Promise.reject(new Error('Network Error'))
    );
    const data = await fetchData();
    expect(data).toBeNull();
    });
});
