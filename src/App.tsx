import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropsComp from './component/PropsComp';
import ChildrenProps from './component/ChildrenProps';

function App() {
  return (
    <div className="App">
        {/* <PropsComp name="utsav" address="delhi" sal={20000} age={24}/> */}
        <ChildrenProps compname="parent-component" des="hii i am for teching children props" >
        <PropsComp name='utsav' sal={2000} address='delhi' age={24}/>
        </ChildrenProps>
              
       
    </div>
  );
}

export default App;
