const searchByName = require('./main.js');
const searchByNameProducts = require('./main.js');

const data =require('./data.js')

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

// Search By Name of products Function test 
test('should return all the objects contain the pass name',()=>{
    const actual=searchByNameProducts('dress')
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
