const data =require('./data.js')
// const searchInput=document.querySelector('.search-box')
//Search By Name
// searchInput.addEventListener('keypress', searchByName(searchInput.value))
const searchByName =((search)=>{
  const SearchedArray= data.filter((ele)=>{
   if (ele.name==search)
      return ele 
  })
//  return  displayData(SearchedArray)
  return SearchedArray
})
module.exports =searchByName