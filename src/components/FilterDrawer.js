import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "react-bootstrap/Button";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import { TextField } from "@mui/material";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/actions/products";
import MenuIcon from "@mui/icons-material/Menu";
const Pill = styled.span`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 0.4px;
  border-radius: 12px;
`;
const SelectedPill = styled.span`
  background-color: rgb(154, 32, 51);
  color: wheat;
  border: 1px solid black;
  padding: 0.4px;
  border-radius: 12px;
`;
export default function FilterDrawer() {
  const dispatch = useDispatch();

  // Hook controlling visibility
  const [showDrawer, setShowDrawer] = React.useState(false);
  // Hook for the filter data
  const [filterData, setFilterData] = React.useState({
    Category: "",
    Sports: "",
    Max_price: "",
    Min_price: "",
    Color: "",
  });
  //   Hook to check error for Price Range
  const [priceError, setPriceError] = React.useState({
    Min: false,
    Max: false,
  });
  //   Handles Price Rangee Changes
  const handlePriceInputChange = (e) => {
    const name = e.target.id; // Checks which change has called the function :  min or max

    if (name === "Max") {
      setFilterData({ ...filterData, Max_price: e.target.value });
    } else {
      setFilterData({
        ...filterData,
        Min_price: e.target.value,
      });
    }
    if (!isNaN(e.target.value) || e.target.value === "") {
      // Check if price range input is valid

      // if valid setting error to false
      setPriceError({ ...priceError, [name]: false });
      // else
      // etting error to true
    } else {
      setPriceError({ ...priceError, [name]: true });
    }
  };
  //   Handles choosing Filter Clicks
  const handlePillClick = (pillTitle, value) => {
    // Sets filtered data for key pillTitle
    setFilterData({ ...filterData, [pillTitle]: value });
  };
  // Toggles visibilty of filter drawer
  const toggleDrawer = () => {
    setShowDrawer((data) => !data);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" className="p-2">
      <div className="text-end pe-1">
        {/* Toggles back drawer */}{" "}
        <CancelIcon
          className="cursor-pointer"
          onClick={() => {
            toggleDrawer();
          }}
        />
      </div>

      <div className="d-flex flex-column gap-3">
        {/* Catagory */}
        <div className="category-filter">
          <h5 className="text-center">Category</h5>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {/* Mapping through the options and checking if it is selected as filter */}
            {["Jersey", "Shoes", "Accessories"].map((cat) => {
              return filterData["Category"] === cat ? (
                <SelectedPill className="col-5 text-center cursor-pointer">
                  {cat}
                </SelectedPill>
              ) : (
                <Pill
                  className="col-5 text-center cursor-pointer"
                  onClick={(e) => {
                    handlePillClick("Category", e.target.innerText);
                  }}
                >
                  {cat}
                </Pill>
              );
            })}
          </div>
        </div>
        {/* Sports Filter */}
        <div className="sports-fiter">
          <h5 className="text-center">Sports</h5>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {/* Mapping through the options and checking if it is selected as filter */}
            {["Cricket", "Football", "Tennis"].map((cat) => {
              return filterData["Sports"] === cat ? (
                <SelectedPill className="col-5 text-center cursor-pointer">
                  {cat}
                </SelectedPill>
              ) : (
                <Pill
                  className="col-5 text-center cursor-pointer"
                  onClick={(e) => {
                    handlePillClick("Sports", e.target.innerText);
                  }}
                >
                  {cat}
                </Pill>
              );
            })}
          </div>
        </div>
        <h5 className="text-center">Price</h5>
        {/* Price Ranges */}
        <div className="price-fiter d-flex">
          <TextField
            error={priceError.Min}
            helperText="numbers accepted"
            id="Min"
            label="Min"
            variant="outlined"
            onChange={handlePriceInputChange}
            value={filterData.Min_price}
          />
          ;
          <TextField
            error={priceError.Max}
            helperText="numbers accepted"
            id="Max"
            label="Max"
            variant="outlined"
            onChange={handlePriceInputChange}
            value={filterData.Max_price}
          />{" "}
        </div>
        {/* Mapping through the options and checking if it is selected as filter */}
        <div className="color-fiter">
          <h5 className="text-center">Color</h5>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {["Red", "Blue", "White", "Black"].map((cat) => {
              return filterData["Color"] === cat ? (
                <SelectedPill className="col-5 text-center cursor-pointer">
                  {cat}
                </SelectedPill>
              ) : (
                <Pill
                  className="col-5 text-center cursor-pointer"
                  onClick={(e) => {
                    handlePillClick("Color", e.target.innerText);
                  }}
                >
                  {cat}
                </Pill>
              );
            })}
          </div>
        </div>
      </div>
      <Divider />
      <div className="d-flex flex-column col-6 mx-auto mt-5 gap-3">
        {/* Button for appyling the filter */}
        <Button
          variant="primary"
          onClick={() => {
            toggleDrawer();
            console.log(filterData);
            // Handle min>max
            dispatch(filterProducts(filterData));
          }}
          disabled={priceError.Max || priceError.Min}
        >
          Apply
        </Button>
        <Button
          variant="outline-danger"
          onClick={() =>
            setFilterData({
              Category: "",
              Sports: "",
              Max_price: "",
              Min_price: "",
              Color: "",
            })
          }
        >
          Clear
        </Button>{" "}
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <div onClick={toggleDrawer}>
          <MenuIcon />
        </div>
        <Drawer anchor="left" open={showDrawer} variant="temporary">
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
