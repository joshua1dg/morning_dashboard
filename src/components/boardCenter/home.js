import React, {Component} from 'react';
import './home.scss'
import './quote';
import Quote from './quote';
import Social from './socialMedia';
import RssFeed from './rssFeed';

class Home extends Component{
    componentToShow (itemToCompare){
        switch (itemToCompare) {
            case 'news': return <RssFeed feed={this.props.feed}/>;
            case 'social': return <Social/>;
            case 'quote': return <Quote feed={this.props.feed}/>
        }
    }

    // debugger;\
    render(){
        return (
            <div className="center" >
                {this.componentToShow(this.props.section)}
            </div>
        );
    }   
}

export default Home;

