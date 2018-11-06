import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../../App.css';
import * as Actions from '../../store/actions';
import Cart from '../../components/cart/Cart';
import SimplePagination from '../../components/simple-pagination/simple-pagination';
import Search from '../../components/search/search';
class Home extends Component {

  constructor(props) {
    super(props);
    const { totalRecords = 0, pageSize = 10, currentPage = 1 } = props.books.pagination;
    this.pageSize = pageSize;
    this.totalRecords = totalRecords;
    this.currentPage = currentPage;
    this.pageStartIndex = 0;
    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

  }

  onNextPage = () => {
    this.currentPage++;
    this.getBooks();
  }

  onPreviousPage = () => {
    this.currentPage--;
    this.getBooks();
  }

  getBooks = () => {
    const {query} = this.props;
    this.pageStartIndex = (this.currentPage -1) * this.pageSize;  
    this.props.fetchBooks(query,this.currentPage, this.pageStartIndex);
  }
  render() {
    let data = null;
    let proceedToChekout = null;
    const imgStyle = {
      width: '100%'
    }
    const cardHeader = {
      height: '200px',
      overflow: 'hidden'
    }
    const cardStyle = {
      width: '250px',
      height: '350px',
      float: 'left',
      margin: '5px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'


      //  border:'1px solid',
      // boxShadow: '2px 3px #888888'
    }
    if (this.props.books.data.length > 0) {
      proceedToChekout = <NavLink to='/checkout'>Procced To Checkout</NavLink>;
      data = this.props.books.data.map((book, id) => {
        return (
          <div key={id} style={cardStyle} >
            <div style={cardHeader}>
              <img className="card-img-top" style={imgStyle} src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail : ''} alt="Card" ></img>

            </div>
            <div className="card-body">
              <h4 className="card-title">{book.volumeInfo.title}</h4>
              <p>{(book.saleInfo.retailPrice) ? book.saleInfo.retailPrice.amount : 'Free'}</p>
              <button onClick={() => this.props.addToCart(id)}>Add to cart</button>
            </div>
          </div>

        )

      })
    }
    const isDisablePrev = this.currentPage > 1 ? false : 'disabled';
    return (
     
      <div className="container">
       <Search />
        <SimplePagination isDisablePrev={isDisablePrev} onNextPage={this.onNextPage} onPreviousPage={this.onPreviousPage}/>
        <div className="row">
          <div className="col-sm-7">
            {data}
          </div>
          <Cart />
          { proceedToChekout }
        </div>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    query:state.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: (query,page,pageStartIndex) => dispatch(Actions.fetchBooks(query,page,pageStartIndex)),
    addToCart: (id) => dispatch(Actions.addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
