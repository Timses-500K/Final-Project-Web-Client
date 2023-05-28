import axios from "axios";
import { instance } from "../axios";

import { API_TOKEN, API_URL } from "../../helper/urls";

export const getAllItem = async () => {
  try {
    const response = await instance.get("/item");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await instance.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export const getUser = async () => {
  try {
    const response = await instance.get("/user");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export const fetchDataFromAPI = async (endpoint) => {
  try {
    const res = await axios.get(`${API_URL}${endpoint}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export const checkStock = async (itemId, sizeId) => {
  try {
    const response = await instance.get(`/productDetail/${itemId}`);
    const res = response.data.productDetails;
    const filteredSize = res.itemSize.filter((size) => size.size === sizeId);
    return filteredSize?.[0].ItemSize.stock;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export const addToCart = async (addressId, itemId, sizeId, quantity) => {
  try {
    const response = await instance.post("/cart/addcart", {
      addressId,
      itemId,
      sizeId,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export const createOrder = async () => {
  try {
    const response = await instance.post("/order");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
