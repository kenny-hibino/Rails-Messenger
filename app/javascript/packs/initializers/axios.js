import axios from 'axios';

const authToken = document.head.querySelector('[name="jwt-token"]').content
const baseURL = process.env.NODE_ENV === 'production' ?
                'https://salty-beyond-48780.herokuapp.com' :
                'http://localhost:3000';

const instance = axios.create({
  baseURL,
  headers: {
    'Authorization': `Token ${authToken}`,
  },
});

export default instance;
