console.log("ssssssss");
const searchInput=document.querySelector('.search-box')
searchInput.addEventListener('keypress', searchByName(searchInput.value))

const searchInputSeller=document.querySelector('.search-box-product')
searchInputSeller.addEventListener('keypress', searchByName(searchInput.value))
console.log(searchInputSeller);
console.log(searchInput.value);


