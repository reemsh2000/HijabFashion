const itemsContainer=document.querySelector('.items')

function addToCart(id){
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
//    Edit Element Content
let index = getData(id)
   img.src=data[index].image
   price=data[index].price
   delBtn.setAttribute("id",data[index].id);
   delBtn.textContent='Remove'
  
}
function getData (id){
 for(var i=0;i<data.length;i++){
     if(data[i].id==id)
     break;
     return i;
 }
   
}