//filter By Caregoreys
const filterByCategory = (SearchCategory, data) => {
  const SearchedArray = data.filter((ele) => ele.category == SearchCategory);
  return SearchedArray;
};
// ********************************************************************************

//Filter items By Price Function
const filterByPrice = (filterPrice, data) => {
  const filteredArray = data.filter((item) => item.price == filterPrice);
  return filteredArray;
};

//Search By Name Function fot products
const searchByProductsName = (searchName, data) => {
  const SearchedArrayProducts = data.filter((ele) => ele.name == searchName);
  return SearchedArrayProducts;
};

//Total price calculation function
const totalPriceCal = (itemArray) => {
  const totalPrice = itemArray.reduce(
    (accumulator, currentValue) => accumulator.price + currentValue.price
  );
  return totalPrice;
};

if (typeof module !== "undefined") {
  module.exports = {
    searchByProductsName,
    filterByCategory,
    filterByPrice,
    totalPriceCal,
  };
}
