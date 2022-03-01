import React from "react";
import PigCard from "./PigCard";

function PigList( {hogs} ){
    // console.log('hogs:', hogs)
   const pig = hogs.map((hog) => (
       <PigCard 
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medal={hog["highest medal achieved"]}
       />
   ))

    return (
        <div>
            {pig}
        </div>
    )
}

export default PigList;

