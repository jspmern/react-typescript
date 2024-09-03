import React, { useRef, useState } from 'react'
import Input from './Input'
import Button from './Button'
import Todo from './Todo'
import { useTimer } from './TodoContext'
import List from './List'

function Container() {
    const x = useTimer()
    let [text, setText] = useState<string>('')
    let des = useRef<HTMLInputElement>(null)
    function textHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }
    function submitHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)   //here props is for understanding purpose
    {
        let obj = { des: des.current?.value!, text: text }
        x?.addValue(obj)
    }

    return (
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Todo>
                            <Input type='text' placeholder='Enter todo' id="text" label='text' onChange={textHandler} />
                            <label htmlFor='desc'>timer</label>
                            <input type='text' placeholder='Enter description' id="desc" ref={des} />
                            <br />
                            <Button ele="button" onClick={submitHandler}>Add</Button>
                            <Button ele="link" href='https://google.com'>click-herer</Button>
                            <br />
                            <hr />
                            <List data={x!.todo} />
                        </Todo>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Container