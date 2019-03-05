import React, {Component} from 'react';

class RssFeed extends Component{
    parseRssFeed(feedToParse){
        const resultElements = [];
        console.log('props in rssfeed component: ', this.props.feed);
        for (const [subfeedTitle, subfeedPosts] of Object.entries(feedToParse)){
            console.log(subfeedTitle, 'splitter', subfeedPosts);
            for (let indivPost = 0; indivPost < subfeedPosts.length; indivPost++){
                console.log('subfeed posts: ', subfeedPosts, 'indivPost: ', subfeedPosts[indivPost])
                const indivPostElements = 
                    <div className="indivPostContainer">
                        <h3 className="postTitle">{subfeedPosts[indivPost]['postTitle']}</h3>
                        <p className="postContent">{subfeedPosts[indivPost]['postContent']}</p>
                    </div>
                resultElements.push(indivPostElements);
            }
        }

        return resultElements;
    }

    render(){
        console.log('props in rss container: ', this.props.feed['Reddit'])
        return (
            <div className="feedContainer">
                {this.parseRssFeed(this.props.feed['Reddit'])}
            </div>
        );
    }
}

export default RssFeed;