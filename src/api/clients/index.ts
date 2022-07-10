import axios from 'axios';
/////////////////////////////////
const baseURL = 'https://api.bitpin.ir/v1';

const ytJobsApi = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { ytJobsApi };
