import httpRequest from '~/utils/httpRequest';

class CategoryService {
    getAll = (params) => {
        const url = 'category';
        return httpRequest.get(url, params);
    };
}

const categoryService = new CategoryService();

export default categoryService;
