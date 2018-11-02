import React,{Component} from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import * as Actions from '../../store/actions';
class Home extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let data = null;
    if(this.props.books.data.length > 0) {
      data = this.props.books.data.map( (book,id) => {
        console.log(book.saleInfo);
        return (
        <div >
        <h5>{book.volumeInfo.title}</h5>
        <img src={(book.volumeInfo.imageLinks)?book.volumeInfo.imageLinks.smallThumbnail:''}/>
        <p>{(book.saleInfo.retailPrice) ? book.saleInfo.retailPrice.amount : 'Free'}</p>
        <button onClick={() => this.props.addToCart(id)}>Add to cart</button>
        </div>
        )

      })
    }
    return (
      <div>
          <div className="BookList">
          {data}
          </div>
        <div className="Bookcart">
        <h3>My Cart</h3>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => dispatch(Actions.fetchBooks()),
        addToCart: (id) => dispatch(Actions.addToCart(id))
      }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
