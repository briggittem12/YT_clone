import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5fb8dadfb4msh05fb105b6c63287p1da306jsnd6469f7c416b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
