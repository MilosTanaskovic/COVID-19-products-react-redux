import endpoints from './endpoints';
import { get } from './requestWrappers';

export const getProducts = async () => {
 return await get(endpoints.products, { country: 'GB' });
};