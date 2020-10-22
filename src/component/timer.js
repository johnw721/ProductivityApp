import React, { Component } from 'react'
import moment,{duration} from 'moment'

export default class time extends Component {
    
    state = {
        hours:0,
        minutes:0,
        seconds:0,
    }
    addZeros(value){
        value = String(value);

        while(value.length < 2){
            value = "0${value}"
        }
        return value;
    }
    setCountDown(){

        const futureDate = moment(this.props.futureDate);

        const today = moment();

        const clockCountDown = duration(futureDate.diff(today));

        const hours= clockCountDown.hours();
        const minutes= clockCountDown.minutes();
        const seconds= clockCountDown.seconds();

        this.setState({
            hours, minutes,seconds
        })
    }
/**
 step one: set up countdown clock
 step two: open modal using React Portal 
 step three: Make the futureDate a variable that users can change 
 step three.one : 
 */
    componentDidMount(){
        this.setCountDown();

        this.Interval = setInterval(() => {
            this.setCountDown
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.Interval());
    }

    render() {

        return (
            <div>
                {Object.keys(this.state).map((values,i)=>{
                    <div>
                        {addZeros(this.state[values])}
                    </div>
                })}
                
            </div>
        )
    }
}
