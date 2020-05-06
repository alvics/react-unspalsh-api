import axios from 'axios';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY_TOKEN;

export default axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});
