import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getYoutubeInfo} from '../../actions/index';
import axios from 'axios';

class Social extends Component{


    componentDidMount(){
        this.props.getYoutubeInfo();

    } 

    render(){
        const {youtubeInfo} = this.props

        return (
            <div className='socialInfoContainer'>
                <div className="totalSubscribersContainer">
                    <img className='socialImage' src="/dist/images/socialShape.png" alt="" />
                    <div className="subscriberText">
                        <div>Total Subscribers</div>
                        <div>{youtubeInfo}</div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default connect(mapStateToProps, {getYoutubeInfo})(Social);

function mapStateToProps(state){
    return {
        youtubeInfo: state.apiCall.youtubeInfo
    }
}