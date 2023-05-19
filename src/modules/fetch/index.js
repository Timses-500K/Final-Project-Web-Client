import { instance } from "../axios"


export const getAllItem = async () => {
  try {
    const response = await instance.get('/api/item')
    return response.data
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || 'Something went wrong');
  }
}