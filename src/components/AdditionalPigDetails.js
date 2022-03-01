import React from 'react'

function AdditionalPigDetails({specialty, weight, greased, medal}) {
    // console.log("weight: ", weight)
  return(
    
        <div>
             <div>{specialty}</div>
             <div>{weight}</div>
             <div>{medal}</div>
             <div>{greased}</div>
         </div>
       
        
  )
}
console.log(AdditionalPigDetails)

export default AdditionalPigDetails