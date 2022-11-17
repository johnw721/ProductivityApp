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