import httpRequest from '~/utils/httpRequest';

const AcountService = {
   login: (data) => {
      const url = 'acount/login';
      return httpRequest.post(url, data);
   },
   checkLogin: () => {
      const url = 'acount';
      return httpRequest.get(url);
   },
   register: (data) => {
      const url = 'acount/register';
      return httpRequest.post(url, data);
   },
   verify: (data) => {
      const url = 'acount/verify';
      return httpRequest.post(url, data);
   },
   search: (data) => {
      const url = 'acount/search';
      return httpRequest.post(url, data);
   },
};
export default AcountService;
