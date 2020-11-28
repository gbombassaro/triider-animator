import {find, remove} from 'lodash';

const setUserAuthenticated = (state, action) => {
  console.log('SET USERS', action.payload);
  return {...state, ...action.payload};
};

// const increaseAmount = (state, action) => {
//   let product = find(state, {id: action.payload.id});
//   product.productAmount++;
//   product.totalPrice = product.price * product.productAmount;
//   return [...state];
// };

// const decreaseAmount = (state, action) => {
//   let product = find(state, {id: action.payload.id});
//   product.productAmount--;
//   product.totalPrice = product.price * product.productAmount;
//   if (product.productAmount === 0) remove(state, product);
//   return [...state];
// };

const user = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER':
      return setUserAuthenticated(state, action);
    // case 'INCREASE_AMOUNT':
    //   return increaseAmount(state, action);
    // case 'DECREASE_AMOUNT':
    //   return decreaseAmount(state, action);
    case 'CLEAR':
    default: 
      return [];
  }
};

export default user;