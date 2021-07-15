const itemsContainer = document.querySelector(".items");
// Get Data from local storage to print it in Cart page
function getDataFromLocalSorage() {
  let dataFromLocal = JSON.parse(localStorage.getItem("itemsId"));
  let dataProduct = JSON.parse(localStorage.getItem("products"));
  console.log(dataFromLocal);
  for (var z = 0; dataFromLocal.length > z; ++z) {
    // Create item in html with classes
    let item = document.createElement("div");
    itemsContainer.appendChild(item);
    item.classList.add("item");
    let imgDiv = document.createElement("div");
    item.appendChild(imgDiv);
    imgDiv.classList.add("img");
    let img = document.createElement("img");
    imgDiv.appendChild(img);
    let price = document.createElement("p");
    imgDiv.appendChild(price);
    let delBtn = document.createElement("button");
    item.appendChild(delBtn);
    delBtn.classList.add("deleteBtn");
    //  Edit Element Content
    let index = getData(dataFromLocal[z]);
    img.src = dataProduct[index].image;
    price.textContent = dataProduct[index].price;
    delBtn.setAttribute("id", dataProduct[index].id);
    delBtn.addEventListener("click", (e) => {
      deleteFromCart(e.target.id);
      itemsContainer.removeChild(e.target.parentNode);
    });
    delBtn.textContent = "Remove";
  }
}
//  Get Data by id
function getData(item) {
  let dataProduct = JSON.parse(localStorage.getItem("products"));
  let index;
  for (let i = 0; i < dataProduct.length; i++) {
    if (dataProduct[i].id == item.itemId) {
      index = i;
    }
  }
  return index;
}
//  **************************************************
//delete item id from local storage
function deleteFromCart(itemId) {
  let dataFromLocal = JSON.parse(localStorage.getItem("itemsId"));
  const newArray = dataFromLocal.filter((ele) => {
    return ele.itemId != itemId;
  });
  localStorage.setItem("itemsId", JSON.stringify(newArray));
  return;
}
getDataFromLocalSorage();
