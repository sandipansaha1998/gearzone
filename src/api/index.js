import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-api.socialise-india.in/",
});

export const fetchProducts = async () => {
  const response = await API.get(`/products`).catch((err) => {
    console.log(err);
  });
  // console.log(response);
  return response;
};

export const createProduct = async (newProduct) => {
  const response = await API.post(`/products/`, newProduct).catch((err) => {
    console.log(err);
  });
  return response;
};

export const updateProduct = async (product) => {
  const id = product.id;
  const response = await API.put(`/products/${id}`, product).catch((err) => {
    console.log(err);
  });
  return response;
};

export const deleteProduct = async (product) => {
  const id = product.id;
  const response = await API.delete(`/products/${id}`).catch((err) => {
    console.log(err);
  });
  return response;
};
