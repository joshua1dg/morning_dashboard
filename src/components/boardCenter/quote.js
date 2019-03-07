import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuote} from '../../actions/index';
import axios from 'axios';

class Quote extends Component{
    componentDidMount(){
        this.props.getQuote();
    }

    render(){
        console.log('this.props in quote: ', this.props)
        const {quote, author} = this.props.quoteObj;
        return (
            <div className="quoteContainer" >
                <div className='quote'>{quote}<br />- {author}</div>
            </div>
        );
    }

}

export default connect(mapStateToProps, {getQuote})(Quote);

function mapStateToProps(state){
    return{
        quoteObj: state.apiCall.quoteObj 
    }
}