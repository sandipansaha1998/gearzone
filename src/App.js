import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import AdminHome from "./pages/AdminHome";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/actions/products";
import { fetchProducts as fetchProductsAPI } from "./api";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let fetchProducts = async () => {
      const fetchProductsResponse = await fetchProductsAPI();
      dispatch(setProducts(fetchProductsResponse.data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* Home Route */}
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              {" "}
              <Navbar />
              <Home />
            </React.Fragment>
          }
        ></Route>
        {/* Store Route */}
        <Route
          path="/products"
          element={
            <React.Fragment>
              {" "}
              <Navbar />
              <Store />
            </React.Fragment>
          }
        ></Route>
        {/* Filtered Route 1 */}
        <Route
          path="/products/:sport"
          element={
            <React.Fragment>
              {" "}
              <Navbar />
              <Store />
            </React.Fragment>
          }
        ></Route>
        {/* Filtered Route 2 */}
        <Route
          path="/products/:sport/:category"
          element={
            <React.Fragment>
              {" "}
              <Navbar />
              <Store />
            </React.Fragment>
          }
        ></Route>
        <Route exact path="/admin" element={<AdminHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
