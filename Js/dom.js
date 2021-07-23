const container = document.querySelector(".items-container");

const searchInput = document.querySelector(".search-box");
displayItems();
// ********************************************
// Action to search when user click enter key  
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    let   searchProduct=searchInput.value;
    let selectedData=searchByProductsName(searchProduct, data)
    console.log(selectedData)
    }
});
