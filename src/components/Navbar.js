import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterDrawer from "./FilterDrawer";
import brand from "../assets/brand/brand.png";
import CartDrawer from "./CartDrawer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

// Navbar
const Container = styled.nav`
  height: 90px;
  position: fixed;
  z-index: 55;
  @media only screen and (max-width: 767px) {
    position: fixed;
    color: black;
    background-color: white;
  }
`;

const BrandName = styled.div`
  font-weight: 1000;
`;

const Navbar = () => {
  // Hook for background Color
  let [backgroundColor, setBackgroundColor] = useState("transparent");
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll Listner
    const handleScroll = () => {
      let scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      let viewportHeight = window.innerHeight;
      let carouselHeight = 0;
      // Setting different styles for mobiles
      if (window.screen.availWidth < 768) {
        carouselHeight = 0.35;
      } else {
        // Devices larger than mobile
        carouselHeight = 0.001;
      }

      if (scrollPosition >= carouselHeight * viewportHeight) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      style={{
        backgroundColor,
        color: backgroundColor === "transparent" ? "white" : "black",
        boxShadow:
          backgroundColor === "transparent"
            ? ""
            : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className=" sticky-top container-fluid d-flex justify-content-around justify-content-lg-center align-items-center gap-2 gap-lg-4 p-2 pe-4"
    >
      {/* MUI Drawer for appyling Filter feature */}
      <FilterDrawer />

      <BrandName
        className=" fs-5 fs-2 ms-auto cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        GEARZONE
      </BrandName>
      <img
        className="p-3 me-auto cursor-pointer"
        src={brand}
        alt="Gearzone"
        style={{ height: `85px`, borderRadius: `50%` }}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className=" fw-bold ms-auto ms-md-0 cursor-pointer ">
        {/* Link to Store Page */}
        <StorefrontIcon
          className="fs-2"
          onClick={() => {
            navigate("/products");
          }}
        />
      </div>
      <div className="fs-5 fw-bold ms-auto ms-md-0 ">Login</div>
      <div>
        <CartDrawer />
      </div>
    </Container>
  );
};
export default Navbar;
