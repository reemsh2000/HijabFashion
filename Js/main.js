
// **********************************************************
function addToCart(id){
  let dataArray = [];         // Array to push id which add to cart  

  function addNameToLocalSorage(){
  const dataObject = {
      itemId: id,
  }
  /* If there is data saved already in local storage, add the new data to old data*/
  let oldData = JSON.parse(localStorage.getItem("itemsId"));
  
  if((oldData !== null)){
      oldData.push(dataObject);
      localStorage.setItem("itemsId", JSON.stringify(oldData))
     
  } else{     /* If local storage is empty, Push new data to the empty array */
      dataArray.push(dataObject)  //Push object of data to the array
      /* set stringified data in local storage */
      localStorage.setItem('itemsId', JSON.stringify(dataArray))
  }
  
  }
  
}

//filter By Caregoreys
const filterByCategory= ((SearchCategory,data)=>{
  const SearchedArray= data.filter((ele)=>ele.category==SearchCategory)
   return SearchedArray
  })
// ********************************************************************************
//Search By Name Function
const searchByName =((searchName,data)=>{
  const SearchedArray= data.filter((ele)=> ele.name==searchName)
  return SearchedArray
  })

//Filter items By Price Function
const filterByPrice =((filterPrice,data)=>{
  const filteredArray= data.filter((item)=> item.price == filterPrice)
  return filteredArray
  })

//Search By Name Function fot products
  const searchByProductsName =((searchName,data)=>{
    const SearchedArrayProducts= data.filter((ele)=> ele.name==searchName)
    //  return  displayItems(SearchedArray)
    return SearchedArrayProducts
    })

//Total price calculation function
const totalPriceCal =(itemArray)=>{
  const totalPrice = itemArray.reduce((accumulator,currentValue) => accumulator.price+currentValue.price)
  return totalPrice;
  }

    if (typeof module !== "undefined") { module.exports = {searchByName, searchByProductsName,filterByCategory, filterByPrice,totalPriceCal}}

