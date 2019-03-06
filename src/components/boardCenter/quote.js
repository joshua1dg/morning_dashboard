import React, {Component} from 'react';
import axios from 'axios';

class Quote extends Component{

    state = {
        quoteObj: {
            quote: '',
            author: ''
        }
    }

    async getQuote(){
        const resp = await axios.get('/api/quoteApi.php');
        return resp.data;
    }

    async componentDidMount(){
        const { text, citation } = await this.getQuote();

        this.setState({
            quoteObj: {
                quote: text,
                author: citation
            }
        })
    }


    render(){
        const {quote, author} = this.state.quoteObj;
        return (
            <div className="quoteContainer" >
                <div className='quote'>{quote}<br />- {author}</div>
            </div>
        );
    }

}

export default Quote;