import { ActionTypes } from "../constants/action-types";

export const productsReducer = (
  products = { all: [], filtered: null },
  action
) => {
  console.log("Payload:", action.payload);
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...products, all: [...action.payload] };
    case ActionTypes.FILTER_PRODUCTS:
      console.log(`Filter reducer`);
      let filterData = action.payload;
      const filteredProducts = products.all.filter((product) => {
        if (
          (filterData.Category === "" ||
            product.category === filterData.Category) &&
          (filterData.Sports === "" || product.sport === filterData.Sports) &&
          (filterData.Max_price === "" ||
            product.price <= filterData.Max_price) &&
          (filterData.Min_price === "" ||
            product.price >= filterData.Min_price) &&
          (filterData.Color === "" || product.color === filterData.Color)
        ) {
          return true;
        }
        return false;
      });
      console.log("Filtered Products", filteredProducts);
      if (!filteredProducts) return { ...products, filtered: null };
      if (filteredProducts.length === 0) return { ...products, filtered: [] };
      return { ...products, filtered: [...filteredProducts] };

    case ActionTypes.RESET_FILTER:
      return { ...products, filtered: null };

    default:
      return products;
  }
};
