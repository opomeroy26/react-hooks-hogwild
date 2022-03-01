import React, {useState} from "react";
import AdditionalPigDetails from "./AdditionalPigDetails";

function PigCard( {name, image, specialty, weight, greased, medal} ){

    const [renderDetails, setRenderDetails] = useState({})

    
   
   function handleTitleClick(e){
       console.log("Title CLICKED")
       setRenderDetails(<AdditionalPigDetails />)

    return( 
       
        <div> 
            <AdditionalPigDetails 
            specialty={specialty}
            weight={weight}
            greased={greased}
            medal={medal}
            />
        </div>
    )
   }
    return (
        <div onClick={handleTitleClick}>
            <div>{name}</div>
            <img alt={name} src={image} />
            {/* <AdditionalPigDetails /> */}
        </div>
        )

}

export default PigCard;