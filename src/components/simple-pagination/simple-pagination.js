import React, { Component } from 'react';
import '../../App.css';

class SimplePagination extends Component {

    
      render () {
          return(
            <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" >
                  <a className="page-link" onClick={this.props.onPreviousPage}  disabled={this.props.isDisablePrev} href="#">Previous</a></li>
              <li className="page-item" onClick={this.props.onNextPage}><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
          );
      }
    
}

export default SimplePagination;