import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/actions/products";
const CarouselImage = styled.img`
  height: 100vh;
  object-fit: fill;
  position: relative;
  top: 0;
  /* Mobile */
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
export const MainCarousel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="https://img1.wallspic.com/previews/8/6/0/8/3/138068/138068-football-ball-lionel_messi-soccer_ball-football_player-x750.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Football accessories</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button
            className="btn btn-outline-light"
            onClick={() => {
              dispatch(filterProducts({ Sports: "Football" }));
              navigate("/products/Football");
            }}
          >
            Shop now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="https://images.thequint.com/thequint%2F2017-12%2F056072c1-cf90-480a-a1c8-e30ad05ca432%2FVirutkohli.jpg?rect=1%2C0%2C1920%2C1080&auto=format%2Ccompress&fmt=webp&width=720"
          alt="Second slide"
        />
        <Carousel.Caption className="">
          <h3>Cricket Accessories</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button
            className="btn btn-outline-light"
            onClick={() => {
              dispatch(filterProducts({ Sports: "Cricket" }));
              navigate("/products/Cricket");
            }}
          >
            Shop now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          className="d-block w-100"
          src="https://staticg.sportskeeda.com/editor/2022/05/a861f-16536501301744-1920.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Tennis Accessories</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button
            onClick={() => {
              dispatch(filterProducts({ Sports: "Tennis" }));
              navigate("/products/Tennis");
            }}
            className="btn btn-outline-light"
          >
            Shop now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
