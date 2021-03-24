import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types'; 

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