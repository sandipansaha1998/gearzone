import React, { useEffect } from "react";
import MainCarousel from "../components/Carousel";
import Categories from "../components/Categories";
import { useDispatch } from "react-redux";
import { resetFilter } from "../redux/actions/products";
import { fetchProducts as fetchProductsAPI } from "../api";
import { setProducts } from "../redux/actions/products";
// import ProductsList from "../components/ProductsList";
const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchProductsResponse = await fetchProductsAPI();
      // console.log(fetchProductsResponse);
      if (fetchProductsResponse) {
        dispatch(setProducts(fetchProductsResponse.data));
      } else {
        // Notify Error
        console.log("Error");
      }
    };
    fetchProducts();
    dispatch(resetFilter());
  }, [dispatch]);
  return (
    <div>
      <div className="d-lg-none bg-dark mb-1" style={{ height: `80px` }}></div>

      <MainCarousel />
      <Categories />
    </div>
  );
};
export default Home;
