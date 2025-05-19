import React from "react";
import { FaClock } from "react-icons/fa";

const SecondsCounter = ({seconds}) => {
    const padded = String(seconds).padStart(6, "0").split("")
    return (
        <div className="counter-container">
            <div className="digit"><FaClock/></div>
            {padded.map((num,index)=> (
                <div className="digit" key={index}>{num}</div>
            ))}
        </div>
    )
}
export default SecondsCounter;