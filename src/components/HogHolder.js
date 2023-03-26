import React, {useState} from "react";
import Card from "./Card";

function HogHolder({ hogs }) {
    const [greased, setGreased] = useState(false)
    const [sort, setSort] = useState("none")

    const displayHogs = hogs.filter(hogObj => {
        if(greased){
            return hogObj.greased
        } else{
            return true
        }
    })

    const renderHogs = displayHogs.filter(hogObj => {
        if(sort === "none"){
            return true
        } else if(sort === "name") {
            return displayHogs.sort((a, b) => {
                if(a.name > b.name){
                    return 1
                }else {
                    return -1
                }
            })
        } else {
            return displayHogs.sort((a, b) => {
                if(a.weight < b.weight){
                    return 1
                }else {
                    return -1
                }
            })
        }
    })

    function handlClick() {
        setGreased(!greased)
    }
    
    function handleChange(e) {
        setSort(e.target.value)
    }


    return (   
        <div>
            <button onClick={handlClick}>{ greased ? "All Hogs" : "Greased Hogs"}</button>
            <select onChange={handleChange}>
                <option>none</option>
                <option>name</option>
                <option>weight</option>
            </select>
            <div className="ui grid container">
                {renderHogs.map( hogObj => <Card hogObj={hogObj}/>)}
            </div>
        </div>
    )
}

export default HogHolder