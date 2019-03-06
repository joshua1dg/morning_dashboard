import React, {Component} from 'react';
import './home.scss'
import './quote';
import { Link } from 'react-router-dom';
import Quote from './quote';
import Social from './socialMedia';
import RssFeed from './rssFeed';


class Home extends Component{
    componentToShow (itemToCompare){
        switch (itemToCompare) {
            case 'news': return <RssFeed/>;
            case 'social': return <Social/>;
            case 'quote': return <Quote/>
        }
    }

    // debugger;\
    render(){
        return (
            <div className="center" >
                <Link to='/news' className="leftPage">{'<'}</Link>
                {this.componentToShow(this.props.section)}
                <Link to='/social' className="rightPage">{'>'}</Link>

            </div>
        );
    }   
}

export default Home;

