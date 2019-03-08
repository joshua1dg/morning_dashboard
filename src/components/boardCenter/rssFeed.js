import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRssData} from '../../actions/index'
import axios from 'axios';

class RssFeed extends Component{

    parseRssFeed(feedToParse){
        const resultElements = [];
        for (const [subfeedTitle, subfeedPosts] of Object.entries(feedToParse)){
            for (let indivPost = 0; indivPost < subfeedPosts.length; indivPost++){
                const htmlParser = new DOMParser();
                const htmlContent = htmlParser.parseFromString(subfeedPosts[indivPost]['postContent'], "text/html");
                var parsedContent = htmlContent.getElementsByClassName("md")[0].innerHTML;

                const indivPostElements = 
                    <div className="indivPostContainer" key={indivPost}>
                        <h3 className="postTitle">{subfeedPosts[indivPost]['postTitle']}</h3>
                        <div className="postContent" dangerouslySetInnerHTML={{ __html: parsedContent}} />
                    </div>
                resultElements.push(indivPostElements);
            }
        }

        return resultElements;
    }

    componentDidMount(){
        this.props.getRssData()
    }

    render(){
        return (
            <div className="feedContainer">
                {this.parseRssFeed(this.props.newsObj)}
            </div>
        );
    }
}

export default connect(mapStateToProps, {getRssData})(RssFeed);

function mapStateToProps(state){
    return{
        newsObj: state.apiCall.newsObj
    }
}