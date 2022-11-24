import axios from 'axios';

import { ErrorAlert } from './alert';

export const customAxios = axios.create({
    baseURL: 'https://dev.dipmarts.com',
    headers: {
        "Authorization" : "Token 1ed917053b82da7:6f08810b432dd63"
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
