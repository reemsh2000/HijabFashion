
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

//Add new product
const addProduct =((productObj, data)=>{
  data.push(productObj);
  return data
  })

