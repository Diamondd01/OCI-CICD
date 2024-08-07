const request = require('supertest');
const app = require('../Public/script'); 
const {fetchWeatherByCity} = require('../Public/script');

describe('fetchweatherbycity fucntion',()=>{
    beforeEach(()=> {
        global.fetch = jest.fn(()=>
            Promise.resolve({
                json:()=> 
                    Promise.resolve([{
                        name:'Miami'}])
            })
    );
});


describe('fetchData function',()=>{
    test("fetches city names from API", async()=>{
        const data = await fetchWeatherByCity('Miami');
        expect(data.cityName).toBe('Miami')
    })
    test("handles Network Errors",async()=>{
        global.fetch.mockImplementationOnce(()=>
        Promise.reject(new Error('Network Error'))
    );
    try{
        await fetchWeatherByCity('Miami');
    }catch(error){
        expect(error.message).toBe("Network Error")
    }
});
}):
})