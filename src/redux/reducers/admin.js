const adminReducer = (products = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    case "CREATE_PRODUCT":
      return [...products, action.payload];

    case "UPDATE_PRODUCT":
      return products.map((product) => {
        if (product.id === action.payload.id) return action.payload;
        return product;
      });

    case "DELETE_PRODUCT":
      const productsNow = products.filter((product) => {
        if (product.id !== action.payload.id) {
          return true;
        }
        return false;
      });
      console.log(productsNow);
      return productsNow;

    default:
      return products;
  }
};
export default adminReducer;
