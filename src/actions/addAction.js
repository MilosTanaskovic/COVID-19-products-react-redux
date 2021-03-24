
import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = (items) => {
 return (dispatch) => {
  console.log("Adding to basket");
  console.log(items.spec);
  dispatch({
   type: ADD_PRODUCT_BASKET, 
   payload: { name: items.spec
    // product: {
    //  name: items.spec,
    //  price: items.price, 
    //  inBasket:true,
    //  numbers: 0
    // },
   }
  })
 }
}