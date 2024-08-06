const { describe } = require("yargs");
const {fetchData}= require(`../Public/script`);
const { test } = require("media-typer");
const { default: expect } = require("expect");

global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve([{Cityname:'Miami'}, {Cityname:'Atlanta'}]),
        ok:true,
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
