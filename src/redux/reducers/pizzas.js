const initialeState = {
 items: [],
 isLoaded: false
};

const pizzas = (state = initialeState, action) => {
   if (action.type === 'SET_PIZZAS') {
     return {
       ...state,
       items: action.payload,
     };
   }
   return state;
};

export default pizzas;