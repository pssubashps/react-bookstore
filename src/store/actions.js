import axios from '../axios/axios';

export const setBooks = (books) => {
  return {
    type: 'FETCH',
    books:books

  }
}
export const fetchBooks =   () => {
  return dispatch => {
      axios.get('?q=reactjs&maxResults=10').then(
        res =>{
          dispatch(setBooks(res.data));
        }
      )
  }

}

export const addToCart = id => {
  
  return {
    type: 'ADDTOCART',
    id:id

  }
}
