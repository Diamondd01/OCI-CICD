const request = require('supertest');
const app = require('../Public/script'); 
import {fetchData} from '../Public/script'

global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve([{cityName: "Miami"}, {cityName:'Atlanta'}])
    })
);


describe('fetchData function', async()=>{
    test("fetches city names from API", async()=>{
        const data = await fetchData();
        expect(data[0].Cityname).toBe('Miami')
    })
    test("handles Network Errors",async()=>{
        global.fetch.mockImplementationOne(()=>
        Promise.reject(new Error('Network Error'))
    );
    const data = await fetchData();
    expect(data).toBeNull();
    });
});
