import React from 'react'
import sublinks from "./data.js"
import { useGlobalContext } from './context.js';

function Submenu() {
  const {submenu,index,location} = useGlobalContext()
  const { center, bottom } = location;
 
  return (
    <>
      {
       submenu ? 
       <div style={{position:"absolute",zIndex:"1",backgroundColor:"white",left:`${center}px`,top:`${bottom + 10}px`,paddingBottom:"20px",transform:"translateX(-50%)"}}>
          <div style={{marginTop:"20px",marginBottom:"15px",marginLeft:"20px"}}>{sublinks[index].page}</div>
         {
            sublinks[index].links.map((item)=>
              <a href=""style={{paddingLeft:"20px"}}>
              <span >{item.icon}</span><span style={{marginLeft:"10px",marginRight:"20px"}}>{item.label}</span>
              </a>
            )
         }            
       </div> : ""
      }
    </>
  )
}

export default Submenu
