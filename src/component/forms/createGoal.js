import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createHabit} from '../../redux/actions/index';

export class createGoal extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        createHabit(e.target.value,e.target.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name='title 'placeholder='Enter Goal Title here'/>
                <input name='time' placeholder='Enter time'/>
            </form>
        )
    }
}

const mapDispatchToProps = {
    
}

export default connect(null, mapDispatchToProps)(createGoal)
