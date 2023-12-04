import React from 'react'
import logo from "./images/logo.svg"
import sublinks from "./data.js"
import { useGlobalContext } from './context.js';

function Navbar() {
const {openSubmenu,setIndex,setLocation,closeSubmenu} = useGlobalContext();

const handleItemClick = (event, idx) => {
  const target = event.currentTarget;
  const { left, bottom, width } = target.getBoundingClientRect();

  openSubmenu();
  setIndex(idx);
  setLocation({ center: left + width / 2, bottom });
};
  return (
    <>
      <div style={{backgroundColor:"aquamarine",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
        <div><img src={logo} alt="" /></div>
        <div>          
            <ul style={{display:"flex",listStyle:"none"}}>
            {
              sublinks.map((item,idx)=>
                <li key={idx} style={{marginRight:"50px",cursor: "pointer"}} 
                  onMouseEnter={(e) => handleItemClick(e, idx)}
                  onMouseLeave={closeSubmenu}
                >{item.page}</li>
              )
            }
            </ul>
        </div>
        <button style={{backgroundColor:"black",color:"white",borderRadius:"4px"}}>Sign in</button>
      </div>
    </>
  )
}

export default Navbar
