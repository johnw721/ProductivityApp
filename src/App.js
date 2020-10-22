import React from 'react';
import Goals from './component/goals';
import ReflectJournal from './component/reflectJournal'

import './App.scss';

class App extends React.Component{
  render(){
    return(
        <div className='App'>
          <Goals/>
          <ReflectJournal/>
        </div>
    )
  }
}

export default App;
