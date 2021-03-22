import endpoints from './endpoints';
import { get } from './requestWrappers';
import { getProducts } from './fetchFunctions';

export const getBaseUrl = () => 'https://falconx-development.coffee4tech.net';

export default {
 endpoints,
 get,
 getProducts
}
