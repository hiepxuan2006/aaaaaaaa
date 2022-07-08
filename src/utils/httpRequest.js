import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://hx-farm.herokuapp.com/api/",
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data.data;
};

export default httpRequest;
