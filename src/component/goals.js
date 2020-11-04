import React, { Component} from 'react'

import './goals.scss'




export default class Goals extends Component {

    state={
        Habit:'',
        showModal:false,
        Timer: Number,
        reflection:Number
    };

   /* handleShowMessage(){
        this.setState({showModal:true})
    }

    handleCloseMessage(){
        this.setState({showModal:false})
    }
*/
    render() {
        return (
            <div className='container'>
                <div className='TopContainer'>
                    <button className='toTheLeft'>
                        <h3>
                            S
                        </h3>
                    </button>
                    <input type='text' className='Goal' placeholder='Habit Title'/>
                    <button className='toTheRight'>
                        <div/>
                        <div/>
                        <div/>
                    </button>
                </div>
                <div className='MiddleContainer'>
                    <div>
                        <button className='Timer' onClick={this.handleShowMessage}>
                            Timer
                        </button>
                    </div>
                    <button className='Reflect'>
                        Reflect
                    </button>
                    <button className='Frequencyform'>
                        Frequency
                    </button>
                </div>
                <div className='BottomContainer'>
                    <div className='inline'>
                        <label className='check'>
                            <input day='Monday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input day='Tuesday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input day='Wednesday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input day='Thursday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input day='Friday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input day='Saturday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input day='Sunday' type='checkbox'/>
                            <span className='custom'></span>
                        </label>
                    </div>
                </div> 
             </div>
        )
        // All on these components should have an onClick method 
    }
}
