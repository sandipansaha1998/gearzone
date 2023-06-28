import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import {
  fetchProducts as fetchProductsAPI,
  createProduct as createProductAPI,
  updateProduct as updateProductAPI,
  deleteProduct as deleteProductAPI,
} from "../api/index";
import { deleteProduct, setProducts } from "../redux/actions/admin";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { TextField } from "@mui/material";
import { Modal, Button } from "react-bootstrap";
import { createProduct, updateProduct } from "../redux/actions/admin";
import EditIcon from "@mui/icons-material/Edit";
import { notify } from "../components/Notification";
const KeyContainer = styled.div`
  background-color: rgb(241, 241, 241);
  border-radius: 5px;
`;
const AdminHome = () => {
  // Products
  const products = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  //   Hook for Create and update Form Modal Visibility
  const [show, setShow] = useState(false);
  //   Hook for Create and update Delete Modal Visibility
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  //   Hook for single product actions
  const [selectedProduct, setSelectedProduct] = useState("");
  // Hook for create and update form
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    sport: "",
    price: "",
    image: "",
    color: "",
    colorCode: "",
  });
  const handleCloseDeleteModal = () => {
    setSelectedProduct("");
    setShowDeleteModal(false);
  };
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleClose = () => {
    setFormData({});
    setShow(false);
    setSelectedProduct("");
  };
  const handleShow = () => {
    setFormData({});
    setShow(true);
    setSelectedProduct("");
  };

  //   Handles Form input change
  const handleInputChange = (e) => {
    let name = e.target.id;
    setFormData({ ...formData, [name]: e.target.value });
  };
  // handles Form submit
  const handleFormSubmit = async () => {
    console.log(formData);
    if (selectedProduct) {
      const response = await updateProductAPI(formData);
      dispatch(updateProduct(response.data));
      notify().success("Product Updated");
    } else {
      const response = await createProductAPI(formData);
      notify().success("Product Created");
      dispatch(createProduct(response.data));
    }
    setShow(false);
    setSelectedProduct("");
  };
  // Handles confirmed delete
  const handleDelete = async () => {
    await deleteProductAPI(selectedProduct);
    notify().success("Product Deleted");

    dispatch(deleteProduct(selectedProduct));
    handleCloseDeleteModal();
  };
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const fetchProductsResponse = await fetchProductsAPI();
  //     if (fetchProductsResponse) {
  //       dispatch(setProducts(fetchProductsResponse.data));
  //     } else {
  //       console.log("Error");
  //     }
  //   };
  //   fetchProducts();
  // }, [dispatch]);

  useEffect(() => {
    setFormData({ ...selectedProduct });
  }, [selectedProduct]);
  return (
    <div>
      {console.log(products)}{" "}
      <div className="d-flex align-items-center">
        <h3 className="text-center p-4 ms-auto">Products</h3>
        <div className="ms-auto me-5 ">
          {/* Toggles Form visibility */}
          <AddCircleOutlineIcon
            className="fs-2 cursor-pointer"
            onClick={handleShow}
          />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-2">
          <TextField
            id="title"
            label="Title"
            variant="standard"
            onChange={handleInputChange}
            value={formData.title}
          />
          <TextField
            id="category"
            label="Category"
            variant="standard"
            onChange={handleInputChange}
            value={formData.category}
          />
          <TextField
            id="sport"
            label="Sport"
            variant="standard"
            onChange={handleInputChange}
            value={formData.sport}
          />
          <TextField
            id="price"
            label="Price"
            variant="standard"
            onChange={handleInputChange}
            value={formData.price}
          />
          <TextField
            id="image"
            label="Image URL"
            variant="standard"
            onChange={handleInputChange}
            value={formData.image}
          />
          <TextField
            id="color"
            label="Base Color"
            variant="standard"
            onChange={handleInputChange}
            value={formData.color}
          />
          <TextField
            id="colorCode"
            label="Hex Code"
            variant="standard"
            onChange={handleInputChange}
            value={formData.colorCode}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleFormSubmit();
            }}
          >
            Add +
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Keys of the product table */}
      <KeyContainer className="row container mx-auto p-3">
        <div className="col text-center">ID</div>
        <div className="col text-center">Title</div>
        <div className="col text-center">Image</div>
        <div className="col text-center">Category</div>
        <div className="col text-center">Sport</div>
        <div className="col text-center">Price</div>
        <div className="col text-center">Color</div>
        <div className="col"></div>
      </KeyContainer>
      {products.map((product) => {
        // Values of the product table
        return (
          <KeyContainer
            key={product.id}
            className="row container mx-auto p-2 mt-1"
          >
            <div className="col text-center my-auto">{product.id}</div>
            <div className="col text-center">
              <img
                src={product.image}
                alt=""
                style={{ maxWidth: `90px`, borderRadius: "10px" }}
              />
            </div>
            <div className="col text-center my-auto">{product.title}</div>
            <div className="col text-center my-auto">{product.category}</div>
            <div className="col text-center my-auto">{product.sport}</div>
            <div className="col text-center my-auto">$ {product.price}</div>
            <div className="col  my-auto">
              {product.colorCode && (
                <div
                  className=" mx-auto border border-2 rounded-circle"
                  style={{
                    width: `40px`,
                    height: `40px`,
                    backgroundColor: `#${product.colorCode}`,
                  }}
                ></div>
              )}
            </div>
            <div className="col my-auto ">
              {/* Delete Icon */}
              <DeleteIcon
                className="text-danger m-4 bg-white fs-2  p-1 rounded-circle shadow-sm cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  handleShowDeleteModal();
                }}
              />
              {/* Edit icon */}
              <EditIcon
                className="bg-white fs-2  p-1 rounded-circle shadow-sm cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setShow(true);
                }}
              />
            </div>
          </KeyContainer>
        );
      })}
      {/* Confirm delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminHome;
