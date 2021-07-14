const data=require('./data.js')
//Search By Name Function
const searchByName =((searchName)=>{
  const SearchedArray= data.filter((ele)=> ele.name==searchName)
  //  return  displayItems(SearchedArray)
  return SearchedArray
  })

module.exports =searchByName
