import React from 'react'
import ReactDOM from 'react-dom'

import './settingsModal.scss'
/*import { connect } from 'react-redux'*/

const SettingsModal=(props)=>{

        return ReactDOM.createPortal(
            <div className='Settings'  onClick={props.closeModal}>
                {props.RenderSettings}
            </div>, 
            document.getElementById('portal')
        );
    }

    export default SettingsModal;
/*const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(settingsModal)*/
