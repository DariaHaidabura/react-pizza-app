const initialeState = {
  category: null,
  sortBy: {
  type: 'popular',
  order: 'desc'
  },
};

const filters = (state = initialeState, action) => {
   if (action.type === 'SET_SORT_BY') {
     return {
       ...state,
       sortBy: action.payload,
     };
   }

  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};


export default filters;