import { ActionTypes } from "../constants/action-types";

const cartReducer = (cart = {}, action) => {
  let product = action?.payload;
  console.log(product);
  let id = product?.id;

  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      console.log(cart[`${id}`]);
      if (cart[`${id}`]) {
        let qty = cart[`${id}`].qty;
        return { ...cart, [id]: { ...product, qty: qty + 1 } };
      } else {
        return { ...cart, [id]: { ...product, qty: 1 } };
      }

    case ActionTypes.REMOVE_FROM_CART:
      //   product = action.payload;
      //   id = product.id;
      if (action.payload.qty === 1) {
        const next = { ...cart };
        delete next[action.payload.id];
        return next;
      } else {
        let qty = cart[`${id}`]?.qty;
        return { ...cart, [id]: { ...product, qty: qty - 1 } };
      }
    default:
      return cart;
  }
};
export default cartReducer;
