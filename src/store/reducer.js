const initalState = {
  books:{
    data:[],
    pagination:{
      totalRecords:0,
      currentPage:1,
      pageSize:1
    }
  },
  cart:[]
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case 'ADDTOCART':
       console.log(action.id);
        alert('I will add to cart',action.id)
        return state;
      break;
      case 'FETCH':

      return {
        ...state,
        books:{
          ...state.books,
          data:action.books.items
        }

      }
      //  console.log(action.books.items);
      default:
      return state;
    }
  }
export default reducer;
