
// Search By Name Function fot items
const searchByName =((searchName,data)=>{
  const SearchedArray= data.filter((ele)=> ele.name==searchName)
  //  return  displayItems(SearchedArray)
  return SearchedArray
  })

//Search By Name Function fot products
  const searchByNameProducts =((searchName,data)=>{
    const SearchedArrayProducts= data.filter((ele)=> ele.name==searchName)
    //  return  displayItems(SearchedArray)
    return SearchedArrayProducts
    })


    if (typeof module !== "undefined") { module.exports = searchByName, searchByNameProducts}

