import React, { Component } from 'react';
import{ StyleSheet} from 'react-native';
import { addStage} from "../../redux/actions/index";
class addStage extends Component {
  onSubmit=()=>{
    var stage = document.getElementById('stageTitle').value;
    var Hr = document.getElementById('Hr').value;
    var Min = document.getElementById('Min').value;
    var Sec = document.getElementById('Sec').value;
    addStage(stage, Hr, Min, Sec);
  }
  clearForm=(event)=>{
    event.preventDefault();
  }
  render() {
    return (
      <form style={styles.container} onSubmit={this.clearForm}>
        <div style={styles.head}>
          <Icon onClick={this.closeModal}/>
        </div>
        <input id='stageTitle' placeholder='Add a stage'/>
        <div style={}>
            <input id="Hr" type='number' placeholder='Hr'/>
            <input id="Min" type='number' placeholder='Min'/>
            <input id="Sec"type='number' placeholder='Sec'/>
        </div>
        <button type='submit' onClick={this.clearForm}>
            plus stage
        </button>
      </form>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    zIndex:2,
    top: 50,
    left: 50,
    Background:blue,
    display: 'flex',
    flexDirection: 'row'
  },
  head:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
})

export default addStage