import axios from 'axios';
import { getBaseUrl } from './index';

const request = (method, url, params) => {
 return axios(
  {
   method,
   url: `${getBaseUrl()}${url}`,
   params : {
    ...params,
   }
  }
 );
};
export const get = (url, params) => request('GET', url, params);