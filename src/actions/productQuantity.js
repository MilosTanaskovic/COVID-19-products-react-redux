import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types'; 

// action is 'increase or decrease'
// name is productName
export const productQuantity = (action, name) => {
 return (dispatch) => {
  console.log("action is", action);
  console.log("product is", name);
  dispatch({
   type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
   payload: name
  })
 }
}
// clear product
export const clearProduct = (name) => {
 return (dispatch) => {
  console.log("Ins clear prod");
  console.log("product name", name);
  dispatch({
   type: CLEAR_PRODUCT,
   payload: name
  })
 }
}