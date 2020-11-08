import React, { Component} from 'react'

import './goals.scss'

import SettingsModal from '../component/modal/settingsModal'




export default class Goals extends Component {
    
    state={
        Habit:'',
        showModal:false,
        Timer: Number,
        reflection:Number,
        Type:''
    };

SettingsOpen = (Event) => {
    //Show Modal
   this.setState({ showModal: true });
    console.log("Modal open");
     //What Kind of Modal to show
    this.setState({Type:Event.target.innerText},()=>{
        console.log(this.state.Type)
    })
    /*Event.target.innerText*/
    console.log(this.state.Type)
  };
 
SettingsClose =()=> {
    //Close Modal
    this.setState({showModal:false});
    console.log('Modal hides')
}

clickMethod =(event)=> {
console.log(`this button for ${event.target.value} has been pressed `)
};

renderSettings=()=>{
    var value = this.state.Type
    if(value === 'Time'){
        return(
        <div>
            <div>
                Hour
            </div>
            <div>
                Minute
            </div>
            <div>
                Seconds
            </div>
        </div>
        )
    }else if(value ==='S'){
        return(
            <div>
                <div>
                    Add Stage
                </div>
            </div>
        )
    }else if(value === 'Reflect'){
        return(
            <div>
                <div>
                    Previous Date
                </div>
            </div>
        )
    }else if(value === 'Frequency'){
        return(
            <div>
                <div>
                    What time on Days Selected
                </div>
            </div>
        )
    }else if(value === ''){
        return(
            <div>
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

    render() {
        return (
            <div className='container'>
                {this.state.showModal ? (<SettingsModal RenderSettings={this.renderSettings()} closeModal={this.SettingsClose}/>):null}
                <div className='TopContainer'>
                    <button className='toTheLeft' name='Stage' onClick={this.SettingsOpen}>
                        <h3>
                            S
                        </h3>
                    </button>
                    <input type='text' className='Goal' placeholder='Habit Title'/>
                    <button className='toTheRight' name='Support' onClick={this.SettingsOpen}>
                        <div/>
                        <div/>
                        <div/>
                    </button>
                </div>
                <div className='MiddleContainer'>
                    <div>
                        <button className='Timer' name='Timer' onClick={this.SettingsOpen}>
                            <p>Timer</p>
                        </button>
                    </div>
                    <button className='Reflect' name='Reflection' onClick={this.SettingsOpen}>
                        <p>Reflect</p>
                    </button>
                    <button className='Frequencyform' name='Frequency' onClick={this.SettingsOpen}>
                        <p>Frequency</p>
                    </button>
                </div>
                <div className='BottomContainer'>
                    <div className='inline'>
                        <label className='check'>
                            <input value='Monday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input value='Tuesday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input value='Wednesday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input value='Thursday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input value='Friday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input value='Saturday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                        <label className='check'>
                            <input value='Sunday' type='checkbox' onClick={this.clickMethod}/>
                            <span className='custom'></span>
                        </label>
                    </div>
                </div> 
             </div>
        )
        // All on these components should have an onClick method 
    }
}
