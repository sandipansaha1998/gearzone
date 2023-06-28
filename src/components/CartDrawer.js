import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "react-bootstrap/Button";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { addToCart, removeFromCart } from "../redux/actions/cart";

export const ButtonHolder = styled.div`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`;
export const Image = styled.img`
  height: 60px;
  max-width: 60px;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export default function CartDrawer() {
  const dispatch = useDispatch();
  // Hook for visibilty of drawer
  const [showDrawer, setShowDrawer] = React.useState(false);
  //   Redux Store state cart
  const cart = useSelector((state) => {
    return state.cart;
  });
  // Toggles drawer
  const toggleDrawer = () => {
    setShowDrawer((data) => !data);
  };

  const list = () => (
    <Box
      sx={{ minWidth: { xs: 300, sm: 400, md: 540, lg: 540 } }}
      role="presentation"
      className=" "
    >
      <div className="text-start p-2 ">
        {" "}
        <CancelIcon
          className="cursor-pointer"
          onClick={() => {
            toggleDrawer();
          }}
        />
      </div>
      <div className="d-flex flex-column px-3 gap-3">
        {Object.keys(cart).map((productKey) => {
          // Maps through the card and lists the products with the quantities in the cart
          return (
            <div className="d-flex col-12 gap-3  justify-content-between  align-items-center">
              <span className="col-3 col-md-4 col-lg-5 word-wrap ">
                {cart[`${productKey}`].title}
              </span>
              <div className="text-center col-2" style={{ width: "60px" }}>
                <Image className="" src={cart[`${productKey}`].image} alt="" />
              </div>

              <ButtonHolder
                style={{ width: `85px` }}
                className="d-flex gap-3 px-3 justify-content-center"
              >
                {/* Decrease Quantity */}
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromCart(cart[productKey]));
                  }}
                >
                  -
                </span>{" "}
                {/* Increase Quantity */}
                {cart[`${productKey}`].qty}{" "}
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(addToCart(cart[productKey]));
                  }}
                >
                  +
                </span>
              </ButtonHolder>
              <span className="col-3 col-md-0  pe-2 text-start">
                $ {cart[`${productKey}`].qty * cart[`${productKey}`].price}
              </span>
            </div>
          );
        })}
      </div>
      {Object.keys(cart).length === 0 ? (
        <h3 className="  text-center mt-5"> Cart Empty</h3>
      ) : (
        <div>
          {" "}
          <Divider className="border border-dark col-10 mx-auto my-3" />
          <div className="d-flex col-10 justify-content-between mx-4">
            <span>Total:</span>
            <span>
              ${" "}
              {Object.keys(cart).reduce((value, productKey) => {
                return (
                  value +
                  cart[`${productKey}`].qty * cart[`${productKey}`].price
                );
              }, 0)}
            </span>
          </div>
          <div className="d-flex flex-column col-12 mx-auto mt-5 gap-3">
            <Button
              className="col-6 col-lg-6 mx-auto"
              variant="primary"
              onClick={() => {
                toggleDrawer();
              }}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      )}
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <button
          type="button"
          className="border-0 position-relative bg-transparent "
          onClick={toggleDrawer}
        >
          <ShoppingCartOutlinedIcon
            sx={{ color: { xs: "black", sm: "white", md: "gray" } }}
            className="fs-3  "
          />
          <span className="col-10 position-absolute top-1 start-100 translate-middle p-1 bg-secondary border border-light rounded-circle text-light">
            {Object.keys(cart).reduce((value, key) => {
              return cart[key]?.qty + value;
            }, 0)}
          </span>
        </button>

        <Drawer anchor="right" open={showDrawer} variant="temporary">
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
