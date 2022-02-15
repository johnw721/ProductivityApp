import React, { Component } from 'react'
import {addHabit} from '../actions'

export class AddHabit extends Component {
    handleClick=(event) =>{
        this.props.closeModal
        event.preventDefault()
    }
    render() {
        var Hr = document.getElementById('Hour').value;
        var Min = document.getElementById('Minute').value;
        var Sec = document.getElementById('Second').value;
        var Title = document.getElementById('Title').value;
        return (
            <form className='formHabit' onSubmit={addHabit(Title,Hr,Min,Sec)}>
                <input id='Title' type='text 'placeholder='Enter Habit Title'/>
                <div className='scnd-row'>
                    <input id='Hour' type='number'/>
                    <input id='Minute' type='number'/>
                    <input id='Second' type='number'/>
                </div>
                <button type="submit" onClick={this.handleClick}>
                    Submit
                </button>
            </form>
            // <div>
            //     <Button className='bttn-red' onClick={this.HabitForm}>
            //         Add Habit
            //     </Button>
            // </div>
        )
    }
}


export default AddHabit;
