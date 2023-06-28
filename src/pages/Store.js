import React, { useEffect } from "react";
import Product from "../components/Product";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts as fetchProductsAPI } from "../api";
import {
  filterProducts,
  setProducts,
  resetFilter,
} from "../redux/actions/products";
import { useLocation } from "react-router-dom";

const StoreContainer = styled.div`
  gap: 0.5vw;
`;
const Store = ({ showFilterDrawer, toggleFilterDrawer }) => {
  // Product List
  const products = useSelector((state) => {
    // Checks if this is the first render or filtered results are empty
    if (state.products.filtered === null) return state.products.all; // First render => products.filtered === null
    if (state.products.filtered?.length > 0) return state.products.filtered; // Filter is applied
    return null; // Filtered Products Array is empty
  });
  const dispatch = useDispatch();
  const location = useLocation(); //Fetches the url
  const filters = location.pathname.split("/"); //Fetches the string params to set the filter
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
      // Checks the filters length and accordingly dispatches filter actions
      if (filters.length === 2) {
        dispatch(resetFilter());
      }
      if (filters.length === 3) {
        dispatch(filterProducts({ Sports: filters[2] }));
      }
      if (filters.length === 4) {
        dispatch(filterProducts({ Sports: filters[2], Category: filters[3] }));
      }
    };
    fetchProducts();
  }, [dispatch, location]);

  return (
    <div style={{ minHeight: `100vh` }} className="bg-dark ">
      <div className="bg-dark" style={{ height: `80px` }}></div>
      <StoreContainer className="d-flex flex-wrap container-fluid mt-4 justify-content-center">
        {/* Mapped through the product list */}
        {products &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        {}
      </StoreContainer>
      {!products && (
        <div className="bg-dark text-light mt-5 fs-2 text-center ">
          -- No Products matched --
        </div>
      )}
    </div>
  );
};

export default Store;
