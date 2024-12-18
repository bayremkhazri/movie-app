import React from 'react'
import Movies from './Movies' 

const Movieslist = ({movies}) => {
  return ( 
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

{movies .map((movie, index) => (
        <Movies key={index} {...movie} /> 
      ))}
    </div>

 )
}






export default Movieslist

