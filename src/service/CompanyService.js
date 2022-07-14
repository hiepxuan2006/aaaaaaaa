import httpRequest from '~/utils/httpRequest';

class CompanyService {
   getAll = (params) => {
      const url = 'company';
      return httpRequest.get(url, { params });
   };
}
const companyService = new CompanyService();
export default companyService;
