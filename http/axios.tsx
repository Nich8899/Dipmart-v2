import axios from 'axios';

import { ErrorAlert } from './alert';

export const customAxios = axios.create({
    baseURL: 'https://dev.dipmarts.com',
    headers: {
        "Authorization" : "Token 04d52c54859fccd:54afb897ed31a30"
    }
  });
  customAxios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status) {
        ErrorAlert(error.message, true)
      }
    })

export default customAxios
