import React from 'react'
import ReactDOM from 'react-dom'
//
import '../../style/settingsModal.scss'
//

import { connect } from 'react-redux'

class SettingsModal extends React.Component{
    
    renderSettings=()=>{
        console.log(this.props.SettingsType)
        var value = this.props.SettingsType
        if(value === 'Time'){
            return(
            <form className="mainContainer"
                onSubmit={this.handleSubmit()}
            >
                <input type='number'>
                    Hour
                </input>
                <input type='number'>
                    Minute
                </input>
                <input type='number'>
                    Seconds
                </input>
            </form>
            )
        }else if(value ==='S'){
            return(
                <div>
                    <form className="mainContainer">
                        <input type='text' placeholder='Stage Title'>
                        </input>
                        <div className='addTime'>
                            <input type='number'/>
                            <input type='number'/>
                            <input type='number'/>
                        </div>
                    </form>
                </div>
            )
        }else if(value === 'Reflect'){
            return(
                <div className="mainContainer">
                    <form>
                        <input type='week'/>
                    </form>
                </div>
            )
        }else if(value === 'Frequency'){
            return(
                <div className="mainContainer">
                    <form>
                        <input type='time'/>
                    </form>
                </div>
            )
        }else if(value === ''){
            return(
                <div className="mainContainer">
                    <div>
                        YouTube
                    </div>
                    <div>
                        Camera
                    </div>
                    <div>
                        Spotify
                    </div>
                </div>
            )
        }
    }  
     render(){
        return ReactDOM.createPortal(
            <div className='Settings'  onClick={this.props.closeModal}>
                {this.renderSettings()}
            </div>, 
            document.getElementById('portal')
        );
    }
 }

const mapStateToProps = (state) => ({
    //bring the state from the SettingsType reducer
    SettingsType: state.SettingsType
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);
