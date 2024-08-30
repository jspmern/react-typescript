import { FormEvent, useRef } from "react";

// In TypeScript, the exclamation mark (!) is used as a non-null assertion operator. It tells the TypeScript compiler that you, as the developer, are confident that a certain value is neither null nor undefined at the point where the exclamation mark is used, even if TypeScript's type system cannot infer this on its own.

// When to Use the Exclamation Mark (!):
// Accessing DOM Elements: When querying a DOM element, TypeScript might infer that the element could be null if it doesn't exist in the document. You can use ! to assert that the element exists.

// typescript
// Copy code
// const element = document.getElementById("myElement")!;
// element.innerHTML = "Hello, world!";
// Here, getElementById might return null if no element with the specified ID exists. The ! tells TypeScript to trust that element is not null.

// Dealing with Optional Properties: If you have an object with optional properties (i.e., properties that may or may not be defined), you might use ! to assert that a particular property is definitely present.

// typescript
// Copy code
// interface User {
//   name: string;
//   age?: number;
// }

// const user: User = { name: "Alice" };
// console.log(user.age!); // Asserts that age is not undefined
// This asserts that user.age is not undefined at this point.

// Avoiding Type Checking for null/undefined: Sometimes TypeScript's type inference requires you to check for null or undefined. If you're certain that the value will never be null or undefined in a particular context, you can use the ! to bypass these checks.

// typescript
// Copy code
// function greet(name?: string) {
//   console.log("Hello, " + name!.toUpperCase());
// }

// greet("Bob"); // Works fine, but without the `!`, TypeScript would complain that `name` could be undefined.
// Important Notes:
// Use with Caution: The ! operator is powerful but should be used sparingly. Overusing it can lead to runtime errors if you're wrong about the value not being null or undefined.
// Code Safety: Instead of using !, it's often safer to write code that explicitly handles null and undefined cases. This might involve using conditional checks or optional chaining (?.) to avoid potential issues.
// Example Without !:
// Instead of using !, you might handle null or undefined more safely:

// typescript
// Copy code
// const element = document.getElementById("myElement");

// if (element) {
//   element.innerHTML = "Hello, world!";
// } else {
//   console.log("Element not found!");
// }
// This approach prevents potential errors by explicitly checking for null or undefined.

type propsType={
    dataAddHandler:(name:string,summary:string)=>void
}
function UseRef(props:propsType)
{
    function submitHandler(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
       let textvalue=text.current!.value
       let summaryValue=text.current!.value
        props.dataAddHandler(textvalue,summaryValue)
         event.currentTarget.reset()
    }
    let text=useRef<HTMLInputElement>(null)
    let summary=useRef<HTMLInputElement>(null)
    return <>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter your text"  name="text" ref={text}/>
        <br/>
        <input type="text" placeholder="enter your summary" name="summary" ref={summary}/>
        <br/>
        <button>add</button>
    </form>
    </>
}
export default UseRef 