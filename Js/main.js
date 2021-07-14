const data=require('./data.js')
//Search By Name Function
const searchByName =((searchName)=>{
  const SearchedArray= data.filter((ele)=> ele.name==searchName)
  //  return  displayItems(SearchedArray)
  return SearchedArray
  })

module.exports =searchByName

//Filter items By Price Function
const filterByPrice =((filterPrice)=>{
  const filteredArray= data.filter((item)=> item.price == filterPrice)
  return filteredArray
  })
module.exports = filterByPrice