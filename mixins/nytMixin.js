const axios = require('axios');
const querystring = require('querystring');
const apiUrl = 'https://api.nytimes.com/svc';
const apikey = 'XOwPaYEXolDRHpaawlBXQ4yfJhIdbmsx';
export const nytMixin = {
    methods: {
        getArticles(section) {
            return axios.get(`${apiUrl}/topstories/v2/${section}.json?api-key=${apikey}`);
        },
searchArticles(data) {
            let params = Object.assign({}, data);
            params['XOwPaYEXolDRHpaawlBXQ4yfJhIdbmsx'] = apikey;
            Object.keys(params).forEach(key => {
                if (!params[key]) {
                    delete params[key];
                }
            })
            const queryString = querystring.stringify(params);
            return axios.get(`${apiUrl}/search/v2/articlesearch.json?${queryString}`);
        }
    }
}