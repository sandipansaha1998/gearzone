import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const filterProducts = (filter) => {
  console.log("Action called");
  let filterTemplate = {
    Category: "",
    Sports: "",
    Max_price: "",
    Min_price: "",
    Color: "",
  };
  let modifiedFilter = { ...filterTemplate, ...filter };
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    payload: modifiedFilter,
  };
};

export const resetFilter = () => {
  return { type: ActionTypes.RESET_FILTER };
};
