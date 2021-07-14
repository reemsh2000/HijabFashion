// const searchInputSeller=document.querySelector('.search-box-product')
// searchInputSeller.addEventListener('keypress', searchByNameProducts(searchInputSeller.value,data))
const submit = document.querySelector("#submit");
let dressName = document.querySelector("#dressName");
let dressDetails = document.querySelector("#dressDetails");
let dressPrice = document.querySelector("#dressPrice");
submit.addEventListener("click", getDataFromForm);
function getDataFromForm() {
  const obj = {};
  obj.name = dressName.value;
  obj.details = dressDetails.value;
  obj.price = dressPrice.value;
  obj.category = "Dress soiree";
  obj.image =
    "https://img.yasmina.com/08eEeGOJrR8pICYuUDfH89DKNqE=/700x792/smart/http://harmony-assets-live.s3.amazonaws.com/image_source/a5/67/a567a4df4f7293c0951a6439ef25fe8d0671ce10.jpg";
  addProduct(obj);
  closeForm() 
}
