import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    updateInputValue = (evt) => {
        this.setState({
            inputValue: evt.target.value
        });
    }

    onSearch = () =>{
        this.props.fetchBooks(this.state.inputValue,1,0);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="form-inline" role="form">
                        <input type="text" className="form-control input-lg" id="search-church" placeholder="Search" onChange={this.updateInputValue}/>
                        <button type="button" className="btn btn-lg" onClick={this.onSearch}>Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchBooks: (query,page,pageStartIndex) => dispatch(Actions.fetchBooks(query,page,pageStartIndex)),
     
    }
  }
export default connect(null,mapDispatchToProps)(Search);