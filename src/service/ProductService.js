const { default: httpRequest } = require('~/utils/httpRequest');

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
}
const productService = new ProductService();
export default productService;
