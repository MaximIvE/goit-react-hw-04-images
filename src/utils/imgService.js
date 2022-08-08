const axios = require('axios').default;

export default async function imgApiService(searchQuery, page, perPage){
    const KEY = '28160645-02600786ca706ffa5b60b520e';
    const url = 'https://pixabay.com/api/?';
    const per_page = perPage || 12;
    const options = {
        params: {
        'key': KEY,
        'image_type': 'photo',
        'orientation': 'horizontal',
        'safesearch': 'true',
        'q': searchQuery,
        'page': page || 1,
        'per_page': per_page,
        },
    };

    try {
        const response = await axios.get(url, options);
        
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}