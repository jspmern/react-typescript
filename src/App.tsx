import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropsComp from './component/1.PropsComp';
import ChildrenProps from './component/2.ChildrenProps';
import State from './component/3.1.State';
import Main from './component/assignment.1/Main';
import Todo from './component/assignment.1/Todo';
import MainContainer from './component/assignment.2/MainContainer';
// import Todo from './component/contextAndReducer/Todo';
import Container from './component/contextAndReducer/Container';
import TodoContextProvider from './component/contextAndReducer/TodoContext';

function App() {
  return (
    <div className="App">
      {/* <PropsComp name="utsav" address="delhi" sal={20000} age={24}/> */}
      {/* <ChildrenProps compname="parent-component" des="hii i am for teching children props" >
        <PropsComp name='utsav' sal={2000} address='delhi' age={24}/>
        </ChildrenProps> */}
      {/* <State></State> */}
      {/* //assignment               */}
      {/* <Main /> */}
      {/* <MainContainer /> */}
      <TodoContextProvider>
        <Container />
      </TodoContextProvider>


    </div>
  );
}

export default App;
