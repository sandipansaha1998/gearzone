import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart";

const ProductCard = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 20vw;
  border-radius: 25px;
  @media only screen and (max-width: 767px) {
    /* CSS rules for mobile devices */
    width: 80vw;
  }

  /* Tablet */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    /* CSS rules for tablet devices */
    width: 40vw;
  }

  /* Desktop */
  @media only screen and (min-width: 1024px) {
    /* CSS rules for desktop devices */
  }
`;

const ProductImage = styled.img`
  max-height: 28vh;
  border-radius: 25px;
  max-width: 95%;
`;

const ColorCard = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
`;

// Product Component
const Product = ({ product }) => {
  const { title, sport, price, color, image, colorCode } = { ...product };
  const dispatch = useDispatch();
  const handleAddProductToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <ProductCard className="pt-3 d-flex flex-column position-relative">
      <div className="d-flex ps-3">
        <h6
          style={{ width: `80px` }}
          className=" rounded-pill bg-danger p-1 text-light text-center  me-3"
        >
          {/* Price */}
          <span className="fs-6 fw-bold">$</span> {price}
        </h6>

        <div className="ms-auto me-3">
          {/* Add to Cart */}{" "}
          <div
            style={{ width: `50px` }}
            className="rounded-pill bg-primary text-center text-light cursor-pointer"
            onClick={handleAddProductToCart}
          >
            {" "}
            Buy
          </div>
        </div>
      </div>
      <div className="col-12 text-center">
        {/* Product Image */}
        <ProductImage src={image} />
      </div>
      <div className="product-desc d-flex flex-column m-3 align-items-center  mt-auto">
        <div
          style={{ fontSize: `1.1rem`, fontWeight: 1000 }}
          className="title   col-12 text-center"
        >
          {/* Product Title */}
          {title}
        </div>
      </div>
      <h3 className="d-flex align-items-center">
        {/* Sport */}
        <span className="m-3 badge bg-warning text-dark ">{sport}</span>
        {color && (
          // Color Card
          <ColorCard
            className=" ms-auto me-2 border border-3  rounded-circle"
            style={{ backgroundColor: `#${colorCode}` }}
          >
            {" "}
          </ColorCard>
        )}
      </h3>
    </ProductCard>
  );
};

export default Product;
