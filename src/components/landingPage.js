import React, {Component} from 'react';
import { connect } from 'react-redux'
import { sendUserAuth } from '../actions/index'


class LandingPage extends Component{

    onDemoClick = async values => {
        console.log('Form Values', values);

        const resp = await this.props.sendUserAuth(values);
        console.log('this is response!: ', resp);

        if (!resp.success) {
            console.log('server did not give response!');
            return;
        } else {
            this.props.history.push('/home');
        }
    }

    render(props) {
            console.log('props in landing page: ', props);
            return (
                <nav>
                    <div className="nav-wrapper grey darken-1">
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li onClick={() => this.onDemoClick({ username: "DEMO", password: "DEMOPASSWORD" })}><a>Demo</a></li>
                        </ul>
                        <div className="brand-logo center">Morning Dashboard</div>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href='signIn'>Sign In / Sign Up</a></li>
                        </ul>
                    </div>
                    <div className="imageRender row full-minus-nav-container">
                        <div className="col m6 s12 full-child">
                            <div className="col m8 push-m2 full-child valign-wrapper">
                                <img className="responsive-img" src="dist/images/dashboardRender.jpg" alt="" />
                            </div>
                        </div>
                        <div className="productSlogan col l6 s12 full-minus-nav-container valign-wrapper">
                            <div className="container">
                                <h2>Win The Morning, Win The Day</h2>
                                <p>Our morning rituals shape our days. Why not make yours distraction free?</p>
                            </div>
                        </div>
                    </div>

                </nav>
            )
    }

}


export default connect(mapStateToProps, { sendUserAuth })(LandingPage);
function mapStateToProps(state){
    return {
        sendUserAuth: state.apiCall.sendUserAuth
    }
}