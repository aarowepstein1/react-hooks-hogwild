import React from "react";

function Description({ hogObj }) {
    return(
    <div className="ui eight wide column">
        <p>{hogObj.specialty}</p>
        <p>{hogObj.weight} kg</p>
        <p>{hogObj.greased ? "Greased Hog" : "Ungreased Hog"}</p>
        <p>{hogObj["highest medal achieved"]}</p>
    </div>
    )
}

export default Description