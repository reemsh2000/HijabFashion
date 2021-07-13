const itemsContainer=document.querySelector('.items')

// Get Data from local storage to print it in Cart page 
function getDataFromLocalSorage(){
    let dataFromLocal = JSON.parse(localStorage.getItem("data"));
    console.log(dataFromLocal)
    for(var z=0; dataFromLocal.length >z  ;++z){
      // Create item in html with classes
        let item=document.createElement('div')
        itemsContainer.appendChild(item)
        item.classList.add='item'
        let imgDiv=document.createElement('div')
        item.appendChild(imgDiv)
        imgDiv.classList.add='img'
        let img=document.createElement('img')
        imgDiv.appendChild(img)
        let price=document.createElement('p')
        imgDiv.appendChild(price)
        let delBtn=document.createElement('button')
        item.appendChild(delBtn)
        delBtn.classList.add='deleteBtn'
        //  Edit Element Content
        let index = getData(dataFromLocal[z])
        img.src=data[index].image
        price=data[index].price
        delBtn.setAttribute("id",data[index].id);
        delBtn.textContent='Remove'
    }
  }
     //  Get Data by id 
     function getData (id){
      for(var i=0;i<data.length;i++){
        if(data[i].id==id)
        break;
        return i;
     }
      
   }