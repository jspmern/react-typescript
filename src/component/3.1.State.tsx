import { useState } from "react"
import List from "./3.2.List"
import ChildList from "./3.3.ChildList"
import InputComponent from "./3.4.InputComponent"
import UseRef from "./3.5.UseRef"
 //even can import also this interface because same interface i have to use into list
 export type Data={
    name:string,
    summary:string,
    id:number
 }

function State()
{
    let [data,setData]=useState<Data[]>([])
    //this is for the add data handler
    function dataAddHandler(name:string,summary:string)
    {
        setData((pre)=>{
            return [...pre,{name:name,summary:summary,id:Math.random()}]
        })
    }
    //this is for the delete handler
    function delteHandler(id:number)
    {
        setData((pre)=>{
            return pre.filter((item)=>{
                return item.id !=id
            })
        })
    }
   return (
    <>
      {/* <button onClick={dataAddHandler}>Add Handler</button> */}
      {/* <InputComponent/> */}
      {/* //by using ref */}
      <UseRef dataAddHandler={dataAddHandler}/>
      <br/>
       <List value={data} deleteHandler={delteHandler} >
        <ChildList/>
         </List>
    </>
   )
}
export default State
 