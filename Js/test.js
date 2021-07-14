const searchByName = require('./main.js');
const filterByCaregorey = require('./main.js');
const data =require('./data.js')
test('should return all the objects contain the pass name',()=>{
    const actual=filterByCaregorey('Formal')
    const expected=[ {
        id: 1, 
        name: "dress",
        details: "New Style Hijab",
        price: 25,
        image:"https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/06/20/6820411-1854158242.jpg",
        category :"Formal"

      },    {
        id: 4, 
        name: "Hijab",
        details: "New Style Hijab",
        price: 25,
        image:"https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/10/28/7135861-841127383.jpg",
        category :"Formal"

    }]
    expect(actual).toEqual(expected)
})


// Search By Name Function test 
test('should return all the objects contain the pass name',()=>{
    const actual=searchByName('dress')
    const expected=[ 
      {
        id: 0, 
        name: "dress",
        details: "New Style Hijab",
        price: 25,
        image:"https://www.zyadda.com/wp-content/uploads/2021/04/hijab_jan_23_photoshoot0400_1.jpg",
        category :"Dress soiree"
      },
      {
        id: 1, 
        name: "dress",
        details: "New Style Hijab",
        price: 25,
        image:"https://www.sayidaty.net/sites/default/files/styles/800x510/public/2020/06/20/6820411-1854158242.jpg",
        category :"Formal"

      }]
    expect(actual).toEqual(expected)
})
