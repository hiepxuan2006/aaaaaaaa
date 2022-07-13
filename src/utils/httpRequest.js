import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://hx-farm.herokuapp.com/api/',
});
// const httpRequest = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });
export const get = async (path, options = {}) => {
    let response = await httpRequest.get(path, options);
    if (response.status) {
        return response.data;
    }
};
export const post = async (path, data, options = {}) => {
    let response = await httpRequest.post(path, data, options);
    if (response.status) {
        return response.data;
    }
};
export const setAuthToken = (token) => {
    if (token) {
        httpRequest.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${token}`;
    } else {
        delete httpRequest.defaults.headers.common['Authorization'];
    }
};

export default httpRequest;
