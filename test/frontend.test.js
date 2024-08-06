const request = require('supertest');
const app = require('../Public/script'); 

global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve([{cityName: "Miami"}, {cityName:'Atlanta'}])
    })
);

describe('fetchData Function', async()=>{
    Test("fetches city names from API", async()=>{
        const data =await fetchData();
        expect.toBe('Miami')
    })
    const data = await fetchData();
    expect(data).toBeNull()
})