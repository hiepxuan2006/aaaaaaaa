import axios from "axios";

// const httpRequest = axios.create({
//   baseURL: "https://hx-farm.herokuapp.com/api/",
// });
const httpRequest = axios.create({
  baseURL: "http://localhost:8080/api/",
});
export const get = async (path, options = {}) => {
  let response = await httpRequest.get(path, options);
  if (response.status) {
    return response.data;
  }
};

export default httpRequest;
