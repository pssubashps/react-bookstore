import React, { Component } from 'react';
import Cart from '../../components/cart/Cart'
class Checkout extends Component {

    constructor(props) {
      super(props);
     
    }
    render() {
        return (<Cart/>);
    }
}
export default Checkout;