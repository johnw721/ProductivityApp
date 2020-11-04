import React, { Component} from 'react'
/*import ReactDOM from 'react-dom';*/

import './modal.scss';

export default class Modal extends Component {

    /*state = {
        function:''
    }
    render(props) {
     const modal = document.getElementById('portal')
    
     return ReactDOM.createPortal(this.renderModal,modal);
    }
    renderModal(props){
        return (
            Conditional Rendering for each feature at the head of the App 
           <div className='sideModal'>
                if(state.function == 'timer'){
                    <div className=''>
                        <input ype='number' name='hour'/>
                        <input type='number' name='minute'/>
                        <input type='number' name='seconds'/>
                        <input type='submit'/>
                    </div>
                }else{
                    props.map((habit)=>{
                        <div className='default' onClick={

                         This function here should communicate with the entire application

                        }>
                            This belongs here {habit.title}
                        </div>
                    })
                }
            </div> */
            render(){
                return(
                    <div className='SideModal'>
                        <div className='topCurve'>
                        </div>
                        <button className='tab'>
                            <p>
                                Habits
                            </p>
                        </button>
                        <div className='bottomCurve'>
                        </div>
                    </div>
                )
    }
}