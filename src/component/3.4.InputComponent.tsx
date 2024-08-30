import { FormEvent } from "react";

//FormEvent is Genric Event That take HTMLFormElement as a type 
function InputComponent() {
  function submitHandler(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    console.log(data.get("text"), data.get("summary"));
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter your text" name="text" />
        <br />
        <input type="text " placeholder="Enter your summary" name="summary" />
        <br />
        <button>add button</button>
      </form>
    </>
  );
}
export default InputComponent;
