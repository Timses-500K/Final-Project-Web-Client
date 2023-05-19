import { API_TOKEN, API_URL } from "./urls";

export const fetchDataFromAPI = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + API_TOKEN,
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};
