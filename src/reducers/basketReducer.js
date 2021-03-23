import { ADD_PRODUCT_BASKET } from '../actions/types';

const initalState = {
 basketNumbers: 0,

}

export default (state=initalState, action) => {
 switch (action.type) {
  case ADD_PRODUCT_BASKET:
   return {
    ...state,
    basketNumbers: basketNumbers + 1
   }
  default:
   return state;
 }
}