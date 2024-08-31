import React from 'react'
import { TodoType } from './Main'

type ListProps={
    todo:TodoType[],
    deleteHandler:(id:number)=>void,
    editHandler:(id:number)=>void
}
function List(props:ListProps) {
  return (
    <div >
        <>
         {props.todo.map((item)=>{
            return <div   key={item.id}>
                    <div className="flex justify-content-evenly">
                        <div>{item.text}</div>
                        <div>
                            <button onClick={()=>{
                                props.deleteHandler(item.id!)   //here forcefully i says, my id is not undefined
                            }}>del</button>
                            <button onClick={()=>{
                                props.editHandler(item.id!)
                            }} >edit</button>
                        </div>
                    </div>
                    <br/>
            </div>
            
         })}
        </>
    </div>
  )
}

export default List