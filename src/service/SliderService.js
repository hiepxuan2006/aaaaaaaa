import httpRequest from '~/utils/httpRequest';

class SliderService {
   getAll = (params) => {
      const url = 'slider';
      return httpRequest.get(url, { params });
   };
}
const sliderService = new SliderService();
export default sliderService;
