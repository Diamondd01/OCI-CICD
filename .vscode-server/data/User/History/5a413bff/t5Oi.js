global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve([{Cityname:'Miami'}, {Cityname:'Atlanta'}]),
        ok:true,
    })
);