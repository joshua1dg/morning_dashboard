import React, {Component} from 'react';

class Modal extends Component{

    state = {
        modal_on: false
    }

    render(){
        return (
            <div className="modal">
                <div className="modalContent"></div>
                {this.props.modalContent}
            </div>
        )
    }
}

export default Modal;