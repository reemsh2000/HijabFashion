const container = document.querySelector(".items-container");

const searchInput=document.querySelector('.search-box')
searchInput.addEventListener('keypress', searchByName(searchInput.value,data))

function displayItems(dataPrameter) {

    for (let i = 0; i < dataPrameter.length; i++) {
      const displyItem = document.createElement("div");
      displyItem.classList.add("item");
      container.appendChild(displyItem);
        
      const imgItems = document.createElement("img");
      imgItems.src =  `${dataPrameter[i]["image"]}`;
      imgItems.setAttribute("class", "item-img")
      displyItem.appendChild(imgItems);

      const nameItem = document.createElement("p");
      nameItem.classList.add("name");
      nameItem.textContent = `${dataPrameter[i]["name"]}`;
      displyItem.appendChild(nameItem);

      const detailsItem = document.createElement("p");
      detailsItem.classList.add("details");
      detailsItem.textContent = `${dataPrameter[i]["details"]}`;
      displyItem.appendChild(detailsItem);

      const priceItem = document.createElement("p");
      priceItem.classList.add("price");
      priceItem.textContent = `${dataPrameter[i]["price"]} $`;
      displyItem.appendChild(priceItem);

      const catogryItem = document.createElement("p");
      catogryItem.classList.add("price");
      catogryItem.textContent = `${dataPrameter[i]["category"]} `;
      displyItem.appendChild(catogryItem);

      const addButton = document.createElement("button");
      addButton.setAttribute("class", "addToCartBtn");
      addButton.setAttribute("type", "submit");
      addButton.textContent ="Add to card";
      displyItem.appendChild(addButton);
    }
  }
  displayItems(data)



