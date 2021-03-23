import { GET_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
 return (dispatch) => {
  console.log('Getting all basket numbs');
  dispatch({
   type: GET_NUMBERS_BASKET
  })
 }
}