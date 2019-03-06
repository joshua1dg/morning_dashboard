import React, {Component} from 'react';
import axios from 'axios';

class Social extends Component{

    state ={
        youtubeInfo: null
    }

    async getYoutubeInfo(){
        const resp = await axios.get('/api/youtubeAPI.php');
        return resp.data.data;  
    }

    async componentDidMount(){
        const resp = await this.getYoutubeInfo();
        this.setState({
            youtubeInfo: resp
        })
    }

    render(){
        const {youtubeInfo} = this.state

        return (
            <div className='socialInfoContainer'>
                <div className="totalSubscribersContainer">
                    <img className='socialImage' src="dist/socialShape.png" alt="" />
                    <div className="subscriberText">
                        <div>Total Subscribers</div>
                        <div>{youtubeInfo}</div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Social;