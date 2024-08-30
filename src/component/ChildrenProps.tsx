import React, { FC, PropsWithChildren, ReactNode } from 'react'
 
//1.Handling childprops
// function ChildrenProps(props:{children:ReactNode,des:string,compname:string}) {
//   return (
    
//       <div style={{background:"blue" ,border:"1px solid black", width:"100%",height:"500px"}}>
//         <h6>{props.compname}</h6>
//         <p>{props.des}</p>
//       {props.children} 
//       </div>
  
//   )
// }

// export default ChildrenProps



//2. Handling childProps with childNode
// interface childProps{
//     des:string,
//     compname:string,
//     children:ReactNode
// }

// function ChildrenProps(props:childProps)
// {
//      return (
//       <div style={{background:"blue" ,border:"1px solid black", width:"100%",height:"500px"}}>
//         <h3 style={{color:'white'}}>{props.compname}</h3>
//         <p>{props.des}</p>
//       {props.children} 
//       </div>
//   )
// }
// export default ChildrenProps


//3.way type  (PropswithChildren)

// interface PropsInterface{
//     des:string,
//     compname:string,
// }
// type childProps=PropsWithChildren<PropsInterface>

// function ChildrenProps(props:childProps)
// {
//      return (
//       <div style={{background:"blue" ,border:"1px solid black", width:"100%",height:"500px"}}>
//         <h3 style={{color:'white'}}>{props.compname}</h3>
//         <p>{props.des}</p>
//       {props.children} 
//       </div>
//   )
// }
// export default ChildrenProps


//4.By Fc

interface childProps{
    des:string,
    compname:string,
    children:ReactNode
}

let  ChildrenProps:FC<childProps>=(props)=>
{
     return (
      <div style={{background:"blue" ,border:"1px solid black", width:"100%",height:"500px"}}>
        <h3 style={{color:'white'}}>{props.compname}</h3>
        <p>{props.des}</p>
      {props.children} 
      </div>
  )
}
export default ChildrenProps