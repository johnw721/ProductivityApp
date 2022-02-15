<<<<<<< HEAD
import React from 'react';
import Goals from './component/goals';
import ReflectJournal from './component/reflectJournal'
import Modal from './component/modal/modal'

import './style/App.scss';

class App extends React.Component{
  render(){
    return(
        <div className='App'>
          <Goals/>
          <ReflectJournal/>
          <Modal/>
        </div>
    )
  }
}

export default App;
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Provider} from 'react-redux'
// import{createStore} from 'redux'

// import Reducer from './reducers'
// import Linear from './components/Linear';
import HabitList from "./screens/HomePage";

export default class App extends React.Component{

  render() { 
    // const store = createStore(Reducer)
    return (
      <View style={styles.container}>
        <HabitList/>
      </View>
)  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> c8a1871 (GreyProd)
