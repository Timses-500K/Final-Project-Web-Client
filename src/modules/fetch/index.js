import { instance } from "../axios";

export const getAllItem = async () => {
  try {
    const response = await instance.get("/item");
    return response.data;
  } catch (error) {
    console.log(error);
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
