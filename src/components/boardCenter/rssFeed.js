import React, {Component} from 'react';
import axios from 'axios';

class RssFeed extends Component{

    state = {
        newsObj:[]
    }


    async getRssData() {
        const resp = await axios.get('/api/rssParser.php');
        const finalResp = this.parseRssFeed(resp.data.data['Reddit']);
        return finalResp;
    }

    parseRssFeed(feedToParse){
        const resultElements = [];
        for (const [subfeedTitle, subfeedPosts] of Object.entries(feedToParse)){
            for (let indivPost = 0; indivPost < subfeedPosts.length; indivPost++){
                const indivPostElements = 
                    <div className="indivPostContainer" key={indivPost}>
                        <h3 className="postTitle">{subfeedPosts[indivPost]['postTitle']}</h3>
                        <p className="postContent">{subfeedPosts[indivPost]['postContent']}</p>
                    </div>
                resultElements.push(indivPostElements);
            }
        }

        return resultElements;
    }

    async componentDidMount(){
        const resp = await this.getRssData();
        this.setState({
            newsObj: resp
        })
    }

    render(){
        return (
            <div className="feedContainer">
                {this.state.newsObj}
            </div>
        );
    }
}

export default RssFeed;