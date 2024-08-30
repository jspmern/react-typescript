import React, { ReactNode } from "react";
import { Data } from "./3.1.State";

type ListProps={
  value:Data[],
  deleteHandler:(id:number)=>void
  children:ReactNode
}
function List(props:ListProps) {
 return (
  <>
   {props.value.map((item)=>{
    return <div style={{padding:"8px",border:"1px solid black"}}>name is{item.name}and i am from {item.summary} <button onClick={()=>{
      props.deleteHandler(item.id)
    }}>del</button></div>
  })}
  {props.children}
  </>
 
 )
 
 

}

export default List;
