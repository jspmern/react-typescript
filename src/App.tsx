import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropsComp from './component/1.PropsComp';
import ChildrenProps from './component/2.ChildrenProps';
import State from './component/3.1.State';
import Main from './component/assignment.1/Main';
import Todo from './component/assignment.1/Todo';

function App() {
  return (
    <div className="App">
      {/* <PropsComp name="utsav" address="delhi" sal={20000} age={24}/> */}
      {/* <ChildrenProps compname="parent-component" des="hii i am for teching children props" >
        <PropsComp name='utsav' sal={2000} address='delhi' age={24}/>
        </ChildrenProps> */}

      {/* <State></State> */}

      {/* //assignment               */}
      <Main />

    </div>
  );
}

export default App;
