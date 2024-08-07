const request = require('supertest');
const app = require('../Public/script'); 
const {fetchWeatherByCity}= require('../Public/script')

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

describe('fetchweather',()=>{
    beforeEach(()=>{
        global.fetch=jest.fn()
    });
    test('able to fetch weather', async()=>{
        global.fetch.mockImplementationOnce({
            ok:true,
            json:()=> Promise.resolve({
                name:'Miami'
            })
        })
        const data = await fetchWeatherByCity('Miami');
        expect(data.name).toBe('Miami')
    })
})