import { ReactNode } from "react"
import NewInput from "./NewInput"
import ButtonNew from "./ButtonNew"


function MainContainer() {
    return (
        <div style={{ border: "1px solid black", padding: '22px' }}>
            <NewInput id="text" label="username" type="text" /> <br />  <br />
            <NewInput id="password" label="password" type="password" /> <br /> <br />
            <NewInput id="email" label="email" type="email" />  <br /> <br />
            <ButtonNew ele="anchor" href="https://google.com" >click here</ButtonNew>
            <ButtonNew ele="button" style={{ color: 'black' }}>submit</ButtonNew>


        </div>
    )

}
export default MainContainer