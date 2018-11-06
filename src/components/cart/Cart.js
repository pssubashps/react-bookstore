import React, { Component } from 'react';
import { connect } from 'react-redux';
class Cart extends Component {

    render() {
        const priceStyle = {
            float:'right'
        }
        const { cart } = this.props;
        console.log(cart);
        let  data = <h6>{'No data Found'}</h6>
        let totalPrice = 0;
        
        if (cart.length > 0) {
            data = cart.map((book, id) => {
                if(book.saleInfo.retailPrice) {
                    totalPrice+= book.saleInfo.retailPrice.amount
                }
                return (
                    <div key={id} className="well well-lg">
                        <p>{book.volumeInfo.title}
                        <span style={priceStyle}>{(book.saleInfo.retailPrice) ? book.saleInfo.retailPrice.amount : 'Free'}</span>
                        </p>
                       
                    </div>
                )

            })
        }
        return (<div className="col-sm-5">
        <h6>Cart Info</h6>
        <h6>Total Proce : {totalPrice}</h6>
        {data}</div>);
       
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);