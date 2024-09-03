import React, { useState } from 'react'
import { todoType } from './TodoContext'
import Progress from './Progress'
type ListPropsType = {
    data: todoType[]
}

function List(props: ListPropsType) {
    return (
        <div className='row d-flex flex-coloumn  justify-content-evenly' >
            {props.data.map((item) => {
                return <div className="card">
                    <div className="card-body">
                        <div className='col-md-4 m-2'>
                            <Progress data={item} key={Math.random()} />
                        </div>
                    </div>
                </div>
                return
            })}
        </div>
    )
}

export default React.memo(List)