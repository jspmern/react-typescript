import { FC, PropsWithChildren } from "react";
//1.step -1 to access props
// function PropsComp(props:{name:string,address:string})
// {
//    return (
//     <>
//     <h1>hello, i am props component</h1>
//     <p>my name is :{props.name} and i am from {props.address}</p>
//     </>
//    )
// }
// export default PropsComp



//2.step -2 you can destructure also
// function PropsComp({name,address,age,sal}:{name:string,address:string,age:number,sal:number})
// {
//    return (
//     <>
//     <h1>hello, i am props component</h1>
//     <p>my name is :{name} and i am from {address} , my sal is : {sal} and i m {age} year old</p>
//     </>
//    )
// }
// export default PropsComp

// 👉note , still it is become so heavy so we can replace with interface or type-alias

//3  step-  you can define type

// type PropsCompType={name:string,address?:string,age:number,sal:number}
// function PropsComp({name,address,age,sal}:PropsCompType)
// {
//    return (
//     <>
//     <h1>hello, i am props component</h1>
//     <p>my name is :{name} and i am from {address} , my sal is : {sal} and i m {age} year old</p>
//     </>
//    )
// }
// export default PropsComp


//4 step by using interface  
// interface PropsCompInterface{
//     name:string;
//     address:string,
//     age?:number,
//     sal:number
// }

// function PropsComp({name,address,age,sal}:PropsCompInterface)
// {
//    return (
//     <>
//     <h1>hello, i am props component</h1>
//     <p>my name is :{name} and i am from {address} , my sal is : {sal} and i m {age} year old</p>
//     </>
//    )
// }
// export default PropsComp

//5   if you have childeren for that time ,PropsWithChildren

// interface PropsCompInterface{
//     name:string;
//     address:string,
//     age?:number,
//     sal:number
// }
//this type is campable to take child props also

      //1.
// type propsCompType=PropsWithChildren<{
//     name:string;
//     address:string,
//     age?:number,
//     sal:number
// }>
       //2.
// type propsCompType=PropsWithChildren<PropsCompInterface>  (inside genric you can pass interface)

// function PropsComp({name,address,age,sal}:propsCompType)
// {
//    return (
//     <>
//     <h1>hello, i am props component</h1>
//     <p>my name is :{name} and i am from {address} , my sal is : {sal} and i m {age} year old</p>
//     </>
//    )
// }
// export default PropsComp



// 6. by using FC
interface PropsCompType{
    name:string,
    address:string,
    sal:number,
    age:number
}
let PropsComp:FC<PropsCompType>=({name,address,sal,age})=>{
    return (
            <div style={{padding:'18px',margin:"22px", border:"1px solid black", background:"red",color:"black"}}>
            <h1>hello, i am props component</h1>
            <p>my name is :{name} and i am from {address} , my sal is : {sal} and i m {age} year old</p>
            </div>
           )
}
export  default PropsComp
