const { default: axios } = require("axios");

const baseURL = "http://localhost:3001/api";
const instance = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export { instance };
