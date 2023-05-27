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
    const res = response.data;
    // console.log(res, "<<<<res");
    const filteredSize = res.itemSize.filter((size) => size.size === sizeId);
    // console.log(filteredSize, "<<<<filtered");
    return filteredSize?.[0].itemSizeCount;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};
