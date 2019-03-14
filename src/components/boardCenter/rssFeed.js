import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRssData} from '../../actions/index'
import Modal from '../general/modal'
import axios from 'axios';

class RssFeed extends Component{
    state = {
        modalVisible: false,
        modalContentUrl: ''
    }

    parseRssFeed(feedToParse){
        const resultElements = [];
        for (const [subfeedTitle, subfeedPosts] of Object.entries(feedToParse)){
            for (let indivPost = 0; indivPost < subfeedPosts.length; indivPost++){
                // console.log('indiv post: ', subfeedPosts[indivPost])
                const htmlParser = new DOMParser();
                const htmlContent = htmlParser.parseFromString(subfeedPosts[indivPost]['postContent'], "text/html");
                console.log('this is html content: ', htmlContent);
                // var postLink = htmlContent.getElementsByTagName('span')[0]['firstChild']['href'];
                // console.log('post link: ', postLink)
                var parsedContent = htmlContent.getElementsByClassName("md")[0].innerHTML;
                console.log(parsedContent);

                const indivPostElements = 
                    <div className="indivPostContainer modal-trigger" href="#modal1" key={indivPost} onClick={
                        ()=>{this.setState({modalVisible: true, modalContentUrl: postLink}); console.log('clicked!')}
                            }>
                        <h5 className="postTitle">{subfeedPosts[indivPost]['postTitle']}</h5>
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
        const {modalContentUrl} = this.state;

        if(this.state.modalVisible){
            return(
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        {/* <script src='https://redditjs.com/post.js' data-url={modalContentUrl} data-height='500' data-width='650' data-post-finder='mostComments' data-theme='light' data-show-submit='true'></script> */}

                        <iframe src={modalContentUrl}></iframe>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>            )
        }

        return (
            <div className="feedContainer">
                <img className='rssImage' src="/dist/images/rssShape.png" alt="" />
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