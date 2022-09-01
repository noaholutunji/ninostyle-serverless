import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wx9trbdeb8.execute-api.us-east-1.amazonaws.com/prod'
});

export default instance;
