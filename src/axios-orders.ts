import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://n41q44dysf.execute-api.us-east-1.amazonaws.com/prod'
});

export default instance;
