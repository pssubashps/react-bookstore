import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
  //timeout: 10000
});

export default instance;
