import { createContext, ReactNode, useContext, useReducer } from "react";
export type todoType = {
    des: string,
    text: string
}
type TimerState = {
    isRunning: boolean,
    todo: todoType[]
}
type TimerContext = TimerState & {
    addValue: (timer: todoType) => void,
    startTimer: () => void,
    endTimer: () => void
}
type todoContextProviderProps = { children: ReactNode }
//this is context
let todoContext = createContext<TimerContext | null>(null)
//custom hook 
export function useTimer() {

    let data = useContext(todoContext)
    if (data == null) {
        console.log('somthing wrong ')
    }
    return data;

}
type ADD = {
    type: 'ADD',
    payload: todoType
}
type STOP = {
    type: 'STOP'
}
type START = {
    type: "START"
}
type ACTION_TYPE = ADD | STOP | START
//function reducer
function reducer(state: TimerState, action: ACTION_TYPE) {
    if (action.type == "ADD") {

        return { ...state, todo: [...state.todo, action.payload] }
    }
    if (action.type == "STOP") {
        return { ...state, isRunning: true }
    }
    if (action.type == "START") {
        return { ...state, isRunning: false }
    }
    return state
}
function TodoContextProvider(props: todoContextProviderProps) {
    let initalValue: TimerState = {
        isRunning: false,
        todo: []
    }
    let [state, dispatch] = useReducer(reducer, initalValue)
    let contextIntialValue: TimerContext = {
        isRunning: state.isRunning,
        todo: state.todo,
        addValue(data) {
            dispatch({ type: "ADD", payload: data })
        },
        startTimer() {
            dispatch({ type: "START" })
        },
        endTimer() {
            dispatch({ type: "STOP" })
        }
    }

    return <todoContext.Provider value={contextIntialValue}>{props.children}</todoContext.Provider>
}
export default TodoContextProvider