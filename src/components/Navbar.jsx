 import React from 'react'
 
 const Navbar = () => {
   return (
    
     <div style={{display:'flex',background:"black",color:"white",
        justifyContent:"space-between",
        alignItems:'center',
        borderRadius:"10px",
        alignItems:"center",
        width:"30%"
      }} >
        <div>
            <h1> Ashish </h1>

        </div>
        <div style={{display:'flex ',
        justifyContent:"space-between",
    

        background:'black'


        }} > 
            <h3>home</h3>
            <h3>About Us</h3>
            <h3>Education</h3>

          </div>
     </div>
     
   )
 }
 
 export default Navbar