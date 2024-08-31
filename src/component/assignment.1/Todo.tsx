import React, { ChangeEvent, Dispatch, PropsWithChildren } from 'react'
import { TodoType } from './Main'
import List from './List'
type ListProps = {
  text: string,
  setText: Dispatch<React.SetStateAction<string>>   //this is for the setter function
  submitHandler: () => void                          //normal function
  todo: TodoType[],
  deleteHandler: (id: number) => void,
  editHandler: (id: number) => void
}
type TodoProps = PropsWithChildren<ListProps>
function Todo(props: TodoProps) {
  function textHandler(event: ChangeEvent<HTMLInputElement>) {
    props.setText(event.target.value)
  }
  return (
    <div>
      <h1>Hii i am Todo</h1>
      <hr />
      <input type='text' placeholder='Enter your todo' value={props.text} onChange={textHandler} />
      <button onClick={props.submitHandler}>ADD</button>
      <br />
      <List todo={props.todo} deleteHandler={props.deleteHandler} editHandler={props.editHandler} />
    </div>

  )
}

export default Todo