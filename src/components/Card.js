import React, {useState} from "react";
import Description from "./Description";

function Card({ hogObj }) {
    const [hideDescr, setHideDescr]	= useState(true)
	
	function handleClick() {
		setHideDescr(!hideDescr)
	}

        return (
            <div className="hogTile" onClick={handleClick}>
                <h1>{hogObj.name}</h1>
                <img src={hogObj.image} alt="hog"/>
                {hideDescr ? null : <Description hogObj={ hogObj }/>}
            </div>
        )
	


}

export default Card