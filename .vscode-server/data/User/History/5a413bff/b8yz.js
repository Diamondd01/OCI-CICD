const { testEnvironment } = require("../jest.config");

describe('Basic DOM test',()=>{
    beforeEach(()=> {
        document.body.innerHTML=`<div id= "testElement"> Hello,World!</div>`;
    })
    test('finds an elementById',()=>{
        const element = document.getElementById('testElement')
        expect(element).not.toBeNull();
    })
})