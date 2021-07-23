const submit = document.querySelector("#submit");
let dressName = document.querySelector("#dressName");
let dressDetails = document.querySelector("#dressDetails");
let dressPrice = document.querySelector("#dressPrice");
let dressCategory = document.querySelector("#DressCategory");
let dressImage = document.querySelector("#dressImage");
const searchByName=document.querySelector('.search-box-product')
const containerProducts = document.querySelector(".items-container")

submit.addEventListener("click", getDataFromForm);
function getDataFromForm() {
  const obj = {};
  obj.name = dressName.value;
  obj.details = dressDetails.value;
  obj.price = dressPrice.value;
  obj.category = dressCategory.value;
  obj.image =dressImage.value
  addProduct(obj);
  closeForm();
}

// displayItems function
function displayProductsSeller(item) {
  const Alldata = JSON.parse(localStorage.getItem(item));
  for (let i = 0; i < Alldata.length; i++) {
    const displayProduct = document.createElement("div");
    displayProduct.classList.add("item");
    containerProducts.appendChild(displayProduct);

    const imgItems = document.createElement("img");
    imgItems.src = `${Alldata[i]["image"]}`;
    imgItems.setAttribute("class", "item-img");
    displayProduct.appendChild(imgItems);

    const nameItem = document.createElement("p");
    nameItem.classList.add("name");
    nameItem.textContent = `${Alldata[i]["name"]}`;
    displayProduct.appendChild(nameItem);

    const detailsItem = document.createElement("p");
    detailsItem.classList.add("details");
    detailsItem.textContent = `${Alldata[i]["details"]}`;
    displayProduct.appendChild(detailsItem);

    const priceItem = document.createElement("p");
    priceItem.classList.add("price");
    priceItem.textContent = `${Alldata[i]["price"]} $`;
    displayProduct.appendChild(priceItem);

    const catogryItem = document.createElement("p");
    catogryItem.classList.add("price");
    catogryItem.textContent = `${Alldata[i]["category"]} `;
    displayProduct.appendChild(catogryItem);

    const containerButton = document.createElement("div");
    containerButton.setAttribute("class", "btn-product");
    displayProduct.appendChild(containerButton);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.setAttribute("type", "submit");
    deleteBtn.textContent = "Delete";
    containerButton.appendChild(deleteBtn);

    let index = getData(Alldata[i]);
    deleteBtn.setAttribute("id", Alldata[index].id);
    deleteBtn.addEventListener("click", (e) => {
      deleteProduct(e.target.id);
      containerProducts.removeChild(e.target.parentNode.parentNode);
    });


    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.setAttribute("type", "submit");
    editBtn.textContent = "Edit";
    containerButton.appendChild(editBtn);
  }
}
displayProductsSeller("products")

//  Get Data by id
function getData(item) {
  let dataProduct = JSON.parse(localStorage.getItem("products"));
  let index;
  for (let i = 0; i < dataProduct.length; i++) {
    if (dataProduct[i].id == item.id) {
      index = i;
    }
  }
  return index;
}
//  **************************************************
//delete item id from local storage
function deleteProduct(itemId) {
  let dataFromLocal = JSON.parse(localStorage.getItem("itemsId"));
  const newArray = dataFromLocal.filter((ele) => {
    return ele.itemId != itemId;
  });
  localStorage.setItem("itemsId", JSON.stringify(newArray));
  return;
}
// ******************************************************
// Search By Name Function 
searchByName.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
  let searchProduct=searchByName.value;
  const Alldata = JSON.parse(localStorage.getItem('products'));
  let selectedData=searchByProductsName(searchProduct, Alldata)
  localStorage.setItem("ItemSelectedByName", JSON.stringify(selectedData));
  containerProducts.innerHTML=''
  displayProductsSeller("ItemSelectedByName");
  }
})