import axios from 'axios';
import { getBaseUrl } from './index';

// 'AUTH_TOKEN' - have to move somewhere safer!!! (.env.local)
const AUTH_TOKEN = "GB";

const request = (method, url, params) => {
 return axios(
  {
   method,
   url: `${getBaseUrl()}${url}`,
   params : {
    country: AUTH_TOKEN,
    ...params,
   }
  }
 );
};
export const get = (url, params) => request('GET', url, params);