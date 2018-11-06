const initalState = {
  query:'',
  books: {
    data: [],
    pagination: {
      totalRecords: 0,
      currentPage: 1,
      pageSize: 4
    }
  },
  cart: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      const selectedBook = state.books.data.filter((book, bookIndex) => {
        return bookIndex === action.id
      }).map(book => {
        if (state.cart.find(o => o.key === book.key)) {
          book.qty = book.qty + 1;
        } else {
          book.qty = 1;
        }
        return book;
      });
      return {
        ...state,
        cart: state.cart.concat(selectedBook)
      }

    case 'FETCH':
      return {
        ...state,
        books: {
          ...state.books,
          data: action.payload.data.items,
          pagination:{
            ...state.books.pagination,
            currentPage:action.payload.page
          }
        },
        query:action.payload.query,

      };
    default:
      return state;
  }
}
export default reducer;
