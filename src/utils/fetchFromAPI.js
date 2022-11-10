import axios from 'axios';

const BASE_URL = 'https://weatherapi-com.p.rapidapi.com';

const options = {
  params: {},
  headers: {
    'X-RapidAPI-Key': '078b0be2f3msh0b44c50748119a5p1a4672jsnfbe1b8a8ab5a',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}

export const getData = async () => {
    const {data} = await axios.get('https://geolocation-db.com/json/')

    return data; 
  }
