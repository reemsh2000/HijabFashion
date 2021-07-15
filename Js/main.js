// addToCart Function
function addToCart(id) {
  let dataArray = []; // Array to push id which add to cart

  const dataObject = {
    itemId: id,
  };
  /* If there is data saved already in local storage, add the new data to old data*/
  let oldData = JSON.parse(localStorage.getItem("itemsId"));
  if (oldData !== null) {
    oldData.push(dataObject);
    localStorage.setItem("itemsId", JSON.stringify(oldData));
  } else {
    /* If local storage is empty, Push new data to the empty array */
    dataArray.push(dataObject); //Push object of data to the array
    /* set stringified data in local storage */
    localStorage.setItem("itemsId", JSON.stringify(dataArray));
  }
}
// ***********************************************************
// displayItems function
function displayItems() {
  const Alldata = JSON.parse(localStorage.getItem("products"));
  for (let i = 0; i < Alldata.length; i++) {
    const displyItem = document.createElement("div");
    displyItem.classList.add("item");
    container.appendChild(displyItem);

    const imgItems = document.createElement("img");
    imgItems.src = `${Alldata[i]["image"]}`;
    imgItems.setAttribute("class", "item-img");
    displyItem.appendChild(imgItems);

    const nameItem = document.createElement("p");
    nameItem.classList.add("name");
    nameItem.textContent = `${Alldata[i]["name"]}`;
    displyItem.appendChild(nameItem);

    const detailsItem = document.createElement("p");
    detailsItem.classList.add("details");
    detailsItem.textContent = `${Alldata[i]["details"]}`;
    displyItem.appendChild(detailsItem);

    const priceItem = document.createElement("p");
    priceItem.classList.add("price");
    priceItem.textContent = `${Alldata[i]["price"]} $`;
    displyItem.appendChild(priceItem);

    const catogryItem = document.createElement("p");
    catogryItem.classList.add("price");
    catogryItem.textContent = `${Alldata[i]["category"]} `;
    displyItem.appendChild(catogryItem);

    const addButton = document.createElement("button");
    addButton.setAttribute("class", "addToCartBtn");
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", Alldata[i].id);
    addButton.textContent = "Add to cart";
    addButton.addEventListener("click", (e) => {
      const id = e.target.id;
      addToCart(id);
    });
    displyItem.appendChild(addButton);
  }
}
//*********************************************************************
//Add new product
const addProduct = (productObj) => {
  const dataArray = JSON.parse(localStorage.getItem("products"));
  productObj.id = dataArray[dataArray.length - 1].id + 1;
  dataArray.push(productObj);
  localStorage.setItem("products", JSON.stringify(dataArray));
};
//*******************************************************************
var reply_click = (id) => {
  console.log(id);
  return id;
};
