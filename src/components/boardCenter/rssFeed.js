import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRssData} from '../../actions/index'
import axios from 'axios';

class RssFeed extends Component{

    // async getRssData() {
    //     const resp = await axios.get('/api/rssParser.php');
    //     const finalResp = this.parseRssFeed(resp.data.data['Reddit']);
    //     return finalResp;
    // }

    parseRssFeed(feedToParse){
        const resultElements = [];
        for (const [subfeedTitle, subfeedPosts] of Object.entries(feedToParse)){
            console.log('this is subfeed posts: ', subfeedPosts)
            for (let indivPost = 0; indivPost < subfeedPosts.length; indivPost++){
                const indivPostElements = 
                    <div className="indivPostContainer" key={indivPost}>
                        <h3 className="postTitle">{subfeedPosts[indivPost]['postTitle']}</h3>
                        <p className="postContent">{subfeedPosts[indivPost]['postContent']}</p>
                    </div>
                resultElements.push(indivPostElements);
            }
        }

        console.log('in parse feeed function, this is result elements: ', resultElements);
        return resultElements;
    }

    async componentDidMount(){
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