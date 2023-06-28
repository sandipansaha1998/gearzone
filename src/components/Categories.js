import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { filterProducts } from "../redux/actions/products";
const Categories = () => {
  const ProductContainer = styled.div`
    text-align: center;
    position: relative;
  `;
  const ProductImage = styled.img`
    height: 90vh;
    width: 100%;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  `;

  const ProductDesc = styled.div`
    position: absolute;
    top: 0;
    transform: translateY(70vh);
    z-index: 2;
    color: #efe8e8;
    font-size: 2.3rem;
    font-weight: 800;
    opacity: 100%;

    @media only screen and (max-width: 767px) {
      /* CSS rules for mobile devices */
      height: 35vh;
    }

    /* Tablet */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      /* CSS rules for tablet devices */
    }

    /* Desktop */
    @media only screen and (min-width: 1024px) {
      /* CSS rules for desktop devices */
    }
  `;
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <div className="d-flex flex-column flex-md-row container-fluid flex-wrap justify-content-center gap-3 mt-2  ">
      <ProductContainer className=" col-lg-3 position-relative text-center">
        {" "}
        <ProductImage
          src="https://e1.pxfuel.com/desktop-wallpaper/739/535/desktop-wallpaper-isco-real-madrid-jersey-elegant-isco-2018-cave-isco-and-asensio.jpg"
          alt=""
        />
        <ProductDesc className="col-12  d-flex flex-column align-items-center ">
          FOOTBALL KITS{" "}
          <button
            className="btn btn-outline-light col-4"
            onClick={() => {
              dispatch(
                filterProducts({ Sports: "Football", Category: "Accessories" })
              );
              navigate("/products/Football/Jersey");
            }}
          >
            Shop now
          </button>
        </ProductDesc>
      </ProductContainer>
      <ProductContainer className=" col-lg-3 position-relative text-center">
        {" "}
        <ProductImage
          src="https://e1.pxfuel.com/desktop-wallpaper/394/940/desktop-wallpaper-adidas-football-shoes-adidas-football.jpg"
          alt=""
        />
        <ProductDesc className="col-12  d-flex flex-column align-items-center ">
          FOOTBALL SHOES{" "}
          <button
            className="btn btn-outline-light col-4"
            onClick={() => {
              dispatch(
                filterProducts({ Sports: "Football", Category: "Shoes" })
              );

              navigate("/products/Football/Shoes");
            }}
          >
            Shop now
          </button>
        </ProductDesc>
      </ProductContainer>
      <ProductContainer className=" col-lg-3 position-relative text-center">
        {" "}
        <ProductImage
          src="https://e0.pxfuel.com/wallpapers/550/586/desktop-wallpaper-ms-dhoni-ke-cricketer-sports-cricketer-sports.jpg"
          alt=""
        />
        <ProductDesc className="col-12  d-flex flex-column align-items-center ">
          CRICKET BATS{" "}
          <button
            className="btn btn-outline-light col-4"
            onClick={() => {
              dispatch(
                filterProducts({ Sports: "Cricket", Category: "Accessories" })
              );
              navigate("/products/Cricket/Accessories");
            }}
          >
            Shop now
          </button>
        </ProductDesc>
      </ProductContainer>
      <ProductContainer className=" col-lg-3 position-relative text-center">
        {" "}
        <ProductImage
          src="https://e1.pxfuel.com/desktop-wallpaper/539/121/desktop-wallpaper-roger-federer-tennis-player-android-tennis-player.jpg"
          alt=""
        />
        <ProductDesc className="col-12  d-flex flex-column align-items-center ">
          TENNIS RACQUETS{" "}
          <button
            className="btn btn-outline-light col-4"
            onClick={() => {
              dispatch(
                filterProducts({ Sports: "Tennis", Category: "Accessories" })
              );
              navigate("/products/Tennis/Accessories");
            }}
          >
            Shop now
          </button>
        </ProductDesc>
      </ProductContainer>
      <ProductContainer className=" col-lg-3 position-relative text-center">
        {" "}
        <ProductImage
          src=" https://e1.pxfuel.com/desktop-wallpaper/504/951/desktop-wallpaper-guantes-de-portero-adidas-futbolmania-foto-marcela-sansalvador-goalkeeper-gloves-football.jpg"
          alt=""
        />
        <ProductDesc className="col-12  d-flex flex-column align-items-center ">
          GLOVES{" "}
          <button className="btn btn-outline-light col-4">Shop now</button>
        </ProductDesc>
      </ProductContainer>
    </div>
  );
};

export default Categories;
