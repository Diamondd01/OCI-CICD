 
import {fetchWeatherByCity} from '../Public/script';


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
    test("fetches city names from API", async()=>{
        const data = await fetchWeatherByCity('Miami');
        expect(data).toEqual({
            cityName:'Miami'
        })
    })
    test("handles Network Errors",async()=>{
        global.fetch =mockImplementationOnce(()=>
        Promise.reject(new Error('Network Error'))
    );
    const data = await fetchWeatherByCity('Miami');
    expect(data).toBeNull();
    });
});
