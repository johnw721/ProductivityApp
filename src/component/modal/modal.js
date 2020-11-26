import React, { Component} from 'react'
import {connect}from 'react-redux';
import '../../style/modal.scss';

class Modal extends Component {
renderHabitList=()=>{
    return(
    <div className='listRender'>

        <div className='flex-container'>
            <div className='flex-child'>
            <div className='addOn'>
              +
            </div>
          </div>
        </div>
    </div>
/**
         * this.props.stateClone.map([i]=>{
         * return(
         * <div className='flex-container'>
          <div className='flex-child'>
            stateClone[i].title
          </div>
          <div className='flex-child'>
            <div className='del'> 
              X
            </div>
          </div>
        </div>
         * )})
         */        
    )
}
render(){
     return(
        <div className='SideModal' onClick={this.renderHabitList()}>
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

const mapStateToProps = (state)=>({

})
export default connect(mapStateToProps)(Modal);