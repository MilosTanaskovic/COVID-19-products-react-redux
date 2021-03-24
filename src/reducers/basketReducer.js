import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const initalState = {
 basketNumbers: 0,
 basketCost: 0,
 products: {
   'covid-19-antibodies': {
      name: "COVID-19 Antibodies",
      price: 79,
      numbers: 0,
      inBasket: false
   },
   'health-check-basic': {
      name: "Health Check Basic",
      price: 145,
      numbers: 0,
      inBasket: false
   },
   'dev-estudio-de-fertilidad-melio': {
      name: "Dev Estudio de",
      price: 118,
      numbers: 0,
      inBasket: false
   },
   'covid-19-pcr-test': {
      name: "COVID-19 PCR Test",
      price: 79,
      numbers: 0,
      inBasket: false
   }, 
   'nipt': {
      name: "NIPT",
      price: 79,
      numbers: 0,
      inBasket: false
   },
   'thyroid-function': {
      name: "Thyroid function",
      price: 65,
      numbers: 0,
      inBasket: false
   },
   'covid-19-detailed-antibody-test': {
      name: "COVID-19 Detailed",
      price: 99,
      numbers: 0,
      inBasket: false
   }
 }
}

export default (state=initalState, action) => {
 switch (action.type) {
  case ADD_PRODUCT_BASKET:
  let addQuantity = { ...state.products[action.payload.name]}
  
  addQuantity.numbers += 1;
  addQuantity.inBasket = true;
  console.log(addQuantity);
   return {
    ...state,
    basketNumbers: state.basketNumbers + 1,
    basketCost: state.basketCost + state.products[action.payload.name].price,
    products: {
      ...state.products,
      [action.payload.name]: addQuantity 
    }

    // products: [
    //   ...state.products,
    //   {
    //     ...action.payload.product
    //   }
    // ],
    
   };
  case GET_NUMBERS_BASKET:
   return {
    ...state
   }
  default:
   return state;
 }
}