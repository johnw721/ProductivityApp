import React, { Component } from 'react'

export default class frequencyForm extends Component {
handleSubmit=()=>{

}
handleClick=()=>{
    
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select>
            <option value="Monday"/>
            <option value="Tuesday"/>
            <option value="Wednesday"/>
            <option value="Thursday"/>
            <option value="Friday"/>
            <option value="Saturday"/>
            <option value="Sunday"/>
        </select>
        <input type="time" placeholder='what time would you like to get started'/>
        <button type="submit" placeholder="Submit" onClick={this.handleClick}/>
      </form>
    )
  }
}
