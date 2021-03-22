const { transform } = require('../src/index');

describe("Transform",()=> {
   test("should add transformed as true", ()=>{
       expect(transform({a:1})).toEqual({a:1, transformed:false});
   })
});