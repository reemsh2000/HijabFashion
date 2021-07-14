const data =require('./data.js')

//filter By Caregorey
const filterByCaregorey= ((SearchCategory)=>{
  const SearchedArray= data.filter((ele)=>ele.category==SearchCategory)
  //  return  displayData(SearchedArray)
   return SearchedArray
  })
module.exports =filterByCaregorey

//Search By Name Function
const searchByName =((searchName)=>{
  const SearchedArray= data.filter((ele)=> ele.name==searchName)
  //  return  displayItems(SearchedArray)
  return SearchedArray
  })

module.exports =searchByName
