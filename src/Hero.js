import React from 'react'
import phoneImg from './images/phone.svg'

function Hero() {
  return (
    <>
    <div style={{backgroundColor:"aquamarine",display:"flex",alignItems:"center",justifyContent:"space-evenly",position:"relative",zIndex:"0",paddingTop:"80px"}}>
    <div>
        <div style={{fontSize:"50px",fontWeight:"bold"}}>Payments <br/> infrastructure <br/> for the internet</div>
        <p>Millions of companies of all sizes-from startups to Fortune 500s-use stripe's <br/> software and APIs to accept payments,send payouts,and manage their <br/> businesses online</p>
        <button style={{backgroundColor:"black",color:"white",borderRadius:"4px"}}>Start now</button>           
    </div>
    <div>
        <img src={phoneImg} alt="" />
    </div>
    </div>
    </>
  )
}

export default Hero