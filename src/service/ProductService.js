import httpRequest from '~/utils/httpRequest';

class ProductService {
   getAll = (params) => {
      const url = 'product';
      return httpRequest.get(url, { params });
   };
   getListProductCategory = (params) => {
      const url = 'product/list';
      return httpRequest.get(url, { params });
   };
   getProduct = (product, params) => {
      const url = `product/san-pham/${product}`;
      console.log(product);
      return httpRequest.get(url, { params });
   };
   getRandom = (params) => {
      const url = 'product/random';
      return httpRequest.get(url, { params });
   };
   getSearch = (params) => {
      const url = 'product/search';
      return httpRequest.get(url, { params });
   };
   order = (data) => {
      const url = 'order';
      return httpRequest.post(url, data);
   };
   getOrder = (data) => {
      const url = 'order/get-order';
      return httpRequest.post(url, data);
   };
   searchOrder = (data) => {
      const url = 'order/search-order';
      return httpRequest.post(url, data);
   };
}
const productService = new ProductService();
export default productService;
