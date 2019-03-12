import React, {Component, Fragment} from 'react';
import './center.scss'
import './quote';
import { Link } from 'react-router-dom';
import Quote from './quote';
import Social from './socialMedia';
import RssFeed from './rssFeed';


class Home extends Component{
    componentToShow (itemToCompare){
        switch (itemToCompare) {
            case 'news': 
                return (
                <Fragment>
                <Link to='/home/social' className="leftPage">{'<'}</Link>
                    <RssFeed/>
                <Link to='/home' className="rightPage">{'>'}</Link>
                </Fragment>
                );
            case 'social': 
                return (
                <Fragment>
                <Link to='/home' className="leftPage">{'<'}</Link>
                    <Social />
                        <Link to='/home/news' className="rightPage">{'>'}</Link>
                </Fragment>
                );
            case 'quote': 
                return (
                <Fragment>
                        <Link to='/home/news' className="leftPage">{'<'}</Link>
                    <Quote />
                        <Link to='/home/social' className="rightPage">{'>'}</Link>
                </Fragment>                );
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

