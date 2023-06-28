// Action Creators

export const setProducts = (products) => {
  console.log(products);
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const createProduct = (product) => {
  return {
    type: "CREATE_PRODUCT",
    payload: product,
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};
