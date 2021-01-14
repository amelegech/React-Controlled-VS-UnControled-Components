import React from 'react';
import './App.css';
import Controlled from './components/Controlled';
import UnControlled from './components/UnControlled'

function App() {
  return (
    <div className="App">
      <h1>Controlled Vs Uncontrolled component</h1>
      <hr/>
      <h6>Controlled Component: The value of the inpute is controlled by react. It has onChang() method it takes callback event function to change the state</h6>
       <Controlled />
      <hr/>
      <h6>UnControlled Component:value of the input elemente is handeled by the DOM it self react can not take any acton.when ever the input value changed event based callback can not be called</h6>
      <UnControlled/>
      <hr/>
    </div>
  );
}

export default App;
