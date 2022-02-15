import{Text, View, StyleSheet,Button}from 'react-native'
import AddHabit from '../forms/addHabit'
import React, { Component } from 'react'
// import{connect} from 'react-redux'

class HabitList extends Component {

  state={
    showModal: false
  }

  OpenModal=()=>{
    this.setState({showModal: true})
  }

  CloseModal=()=>{
    this.setState({showModal: false})
  }

  Item=({name,timer})=>{
    return(
      <View>
        <Text>{name}</Text>
        <Text>{timer}</Text>
      </View>
    )
  }

  render() {
    return (
    // <FlatList
    //   data={this.props.habits}
    //   renderItem={({item}) => (
    //     <Item key={item.id} name={item.title} timer={item.totalTime}/>
    //   )}>
        <Button style={styles.button} onClick={this.OpenModal} title="Add Habit">
         {this.state.showModal?<AddHabit closeModal={this.CloseModal} />:null}
        </Button>
    // </FlatList> 
    )
  }
}

const styles = StyleSheet.create({
  Habitcontainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'stretch',
    backgroundColor:'blue',
  },
  button:{
    color:'red',
    textAlign: 'center',
  }
})

// const MapStateToProps=(state)=>{
//     habits: state.ListReducer
// }
// export default connect( MapStateToProps)(HabitList)

export default HabitList;