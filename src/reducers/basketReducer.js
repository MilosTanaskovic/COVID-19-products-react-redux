import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/types';

const initalState = {
 basketNumbers: 0,
 basketCost: 0,
 products: {
   'covid-19-antibodies': {
      name: "COVID-19 Antibodies",
      tagName: 'covid-19-antibodies',
      price: 79,
      numbers: 0,
      inBasket: false
   },
   'health-check-basic': {
      name: "Health Check Basic",
      tagName: 'health-check-basic',
      price: 145,
      numbers: 0,
      inBasket: false
   },
   'dev-estudio-de-fertilidad-melio': {
      name: "Dev Estudio de",
      tagName: 'dev-estudio-de-fertilidad-melio',
      price: 118,
      numbers: 0,
      inBasket: false
   },
   'covid-19-pcr-test': {
      name: "COVID-19 PCR Test",
      tagName: 'covid-19-pcr-test',
      price: 79,
      numbers: 0,
      inBasket: false
   }, 
   'nipt': {
      name: "NIPT",
      tagName: 'nipt',
      price: 79,
      numbers: 0,
      inBasket: false
   },
   'thyroid-function': {
      name: "Thyroid function",
      tagName: 'thyroid-function',
      price: 65,
      numbers: 0,
      inBasket: false
   },
   'covid-19-detailed-antibody-test': {
      name: "COVID-19 Detailed",
      tagName: 'covid-19-detailed-antibody-test',
      price: 99,
      numbers: 0,
      inBasket: false
   }
 }
}

export default (state=initalState, action) => {
  let productSelected = "";
 switch (action.type) {
  case ADD_PRODUCT_BASKET:
    productSelected = { ...state.products[action.payload.uniqueName]}
    
    productSelected.numbers += 1;
    productSelected.inBasket = true;
    console.log(productSelected);
   return {
    ...state,
    basketNumbers: state.basketNumbers + 1,
    basketCost: state.basketCost + state.products[action.payload.uniqueName].price,
    products: {
      ...state.products,
      [action.payload.uniqueName]: productSelected 
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
  case INCREASE_QUANTITY:
    productSelected = { ...state.products[action.payload]}
    productSelected.numbers += 1;
   return {
    ...state,
    basketCost: state.basketCost + state.products[action.payload].price,
    products: {
      ...state.products,
      [action.payload]: productSelected
    }
   }
  case DECREASE_QUANTITY:
    productSelected = { ...state.products[action.payload]};
    
    let newBasketCost = 0;
    if( productSelected.numbers === 0){
      productSelected.numbers = 0;
      newBasketCost = state.basketCost;
    }else {
      productSelected.numbers -= 1;
      newBasketCost = state.basketCost - state.products[action.payload].price;
    }
    
   return {
    ...state,
    basketCost: newBasketCost,
    products: {
      ...state.products,
      [action.payload]: productSelected
    }
   }
  default:
   return state;
 }
}