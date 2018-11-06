import axios from '../axios/axios';

export const setBooks = (query,books,page) => {
  return {
    type: 'FETCH',
    payload:{query:query,data:books,page:page}

  }
}
export const fetchBooks =   (query,page,startIndex) => {
  return dispatch => {
      axios.get(`?q=${query}&maxResults=4&startIndex=${startIndex}`).then(
        res =>{
          dispatch(setBooks(query,res.data,page));
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
