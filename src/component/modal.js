import React, { Component} from 'react'
import ReactDOM from 'react-dom';

export default class modal extends Component {
    render(props) {
     const modal = document.getElementById('portal')
    
     return ReactDOM.createPortal(this.renderModal,modal);
    }
    renderModal(props){
        return (
            <div>
                Timer Setting
                <button onClick={this.props.onClose}>
                    close
                </button>
            </div>
        )
    }
}