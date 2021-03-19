import endpoints from './endpoints';
import { get } from './requestWrappers';

export const fetchProducts = async (searchString) => {
 return await get(endpoints.searchProduct,
   { query: searchString }
  );
};