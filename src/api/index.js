import endpoints from './endpoints';
import { get } from './requestWrappers';
import { fetchProducts } from './fetchFunctions';

export const getBaseUrl = () => 'https://falconx-development.coffee4tech.net';

export default {
 endpoints,
 get,
 fetchProducts
}
